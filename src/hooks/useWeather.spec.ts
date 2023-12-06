import { act, renderHook, waitFor } from "@testing-library/react"
import axios from "axios"
import { BAD_INPUT_ERROR, NETWORK_ERROR, useWeather } from "./useWeather"

describe('useWeather', () => {
  it('should return bad input error when 400 status encountered', async () => {
    jest.spyOn(axios, 'get').mockReturnValue(Promise.resolve({ data: undefined, status: 400}))
    const { result } = renderHook(() => useWeather('foo'))

    await act(() => result.current.searchCity('foo'))
    
    waitFor(() => 
      expect(result.current.result).toEqual(BAD_INPUT_ERROR)
    )
  })

  it('should return generic error on other statuses encountered', async () => {
    jest.spyOn(axios, 'get').mockReturnValue(Promise.resolve({ data: undefined, status: 401}))
    const { result } = renderHook(() => useWeather('foo'))

    await act(() => result.current.searchCity('foo'))
    
    waitFor(() => 
      expect(result.current.result).toEqual(NETWORK_ERROR)
    )
  })

  it('should return the result object on healthy 200 status', async () => {
    jest.spyOn(axios, 'get').mockReturnValue(Promise.resolve({ data: { description: "foo "}, status: 200}))
    const { result } = renderHook(() => useWeather('foo'))

    await act(() => result.current.searchCity('foo'))
    
    waitFor(() => 
      expect(result.current.result).toEqual({ description: "foo "})
    )
  })
})