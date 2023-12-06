
export const NETWORK_ERROR = "NETWORK_ERROR"
export const BAD_INPUT_ERROR = "BAD_INPUT_ERROR"

type WeatherIcon = "snow" | "rain" | "fog" | "wind" | "cloudy" | "partly-cloudy-day" | "partly-cloudy-night" | "clear-day" | "clear-night"

export interface WeatherApiHour {
  datetime: string
  temp: number
  feelslike: number
  humidity: number
  icon: WeatherIcon
}

interface WeatherApiDay {
  datetime: string
  hours: WeatherApiHour[]
}

export interface WeatherApiResponse {
  resolvedAddress: string
  description: string
  currentConditions: WeatherApiHour
  days: WeatherApiDay[]
}

export interface CurrentWeather {
  resolvedAddress: string
  description: string
  currentConditions: WeatherApiHour
  hourlyForecast: WeatherApiHour[]
}

type WeatherResult = CurrentWeather | typeof NETWORK_ERROR | typeof BAD_INPUT_ERROR | undefined

export interface WeatherState {
  loading: boolean,
  result: WeatherResult
}