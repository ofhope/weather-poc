import axios from "axios"
import { useCallback, useState } from "react"
import { BAD_INPUT_ERROR, NETWORK_ERROR, WeatherApiResponse, WeatherState } from "./useWeather.types"
import { type Dayjs } from "dayjs"
import { responseToCurrent } from "./useWeather.utils"

const INITAL_STATE: WeatherState = {
  loading: false,
  result: undefined
} as const

const LOADING_STATE: WeatherState = {
  loading: true,
  result: undefined
} as const

const ERROR_BAD_INPUT_STATE: WeatherState = {
  loading: false,
  result: BAD_INPUT_ERROR
} as const

const ERROR_STATE: WeatherState = {
  loading: false,
  result: NETWORK_ERROR
} as const

export const useWeather = (apiToken: string) => {
  const [state, setState] = useState<WeatherState>(INITAL_STATE)
  const searchCity = useCallback(async (city: string, datetime: Dayjs) => {
    setState(LOADING_STATE)
      const { data, status } = await axios.get<WeatherApiResponse>(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${apiToken}&contentType=json`, { validateStatus: () => true})

    if (status == 400) {
      setState(ERROR_BAD_INPUT_STATE)
      return
    }

    if (status != 200) {
      setState(ERROR_STATE)
      return
    }
    
    setState({
      loading: false,
      result: responseToCurrent(data, datetime)
    })
  }, [setState])

  return { loading: state.loading, result: state.result, searchCity }
}