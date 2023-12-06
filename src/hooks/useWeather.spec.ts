import { act, renderHook, waitFor } from "@testing-library/react"
import axios from "axios"
import { useWeather } from "./useWeather"
import dayjs from "dayjs"
import { BAD_INPUT_ERROR, NETWORK_ERROR } from "./useWeather.types"
import { weatherResponseMock } from "./useWeather.mock"

describe('useWeather', () => {
  it('should return bad input error when 400 status encountered', async () => {
    jest.spyOn(axios, 'get').mockReturnValue(Promise.resolve({ data: undefined, status: 400 }))
    const { result } = renderHook(() => useWeather('foo'))

    await act(() => result.current.searchCity('foo', dayjs()))

    waitFor(() =>
      expect(result.current.result).toEqual(BAD_INPUT_ERROR)
    )
  })

  it('should return generic error on other statuses encountered', async () => {
    jest.spyOn(axios, 'get').mockReturnValue(Promise.resolve({ data: undefined, status: 401 }))
    const { result } = renderHook(() => useWeather('foo'))

    await act(() => result.current.searchCity('foo', dayjs()))

    waitFor(() =>
      expect(result.current.result).toEqual(NETWORK_ERROR)
    )
  })

  it('should return the result object on healthy 200 status', async () => {
    jest.spyOn(axios, 'get').mockReturnValue(Promise.resolve({ data: weatherResponseMock, status: 200 }))
    const { result } = renderHook(() => useWeather('foo'))

    await act(() => result.current.searchCity('foo', dayjs('2023-12-06')))

    await waitFor(() =>
      expect(result.current.result).toEqual(expect.objectContaining({
        resolvedAddress: "Melbourne, VIC 3000, Australia",
        description: "Similar temperatures continuing with a chance of rain multiple days.",
        currentConditions: expect.objectContaining({
          temp: 19.4,
          icon: "cloudy"
        }),
        hourlyForecast: expect.anything()
      }))
    )
  })
})