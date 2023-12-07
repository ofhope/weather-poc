
export const GENERIC_ERROR = "GENERIC_ERROR"
export const BAD_INPUT_ERROR = "BAD_INPUT_ERROR"

export type WeatherIcon = "snow" | "rain" | "fog" | "wind" | "cloudy" | "partly-cloudy-day" | "partly-cloudy-night" | "clear-day" | "clear-night"

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

export type WeatherResult = CurrentWeather | typeof GENERIC_ERROR | typeof BAD_INPUT_ERROR | undefined

export interface WeatherState {
  loading: boolean,
  result: WeatherResult
}
