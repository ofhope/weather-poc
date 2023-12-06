import { type Dayjs } from "dayjs";
import { CurrentWeather, WeatherApiResponse } from "./useWeather.types";

const datetimeToString = (datetime: Dayjs): string => datetime.format('HH:00:00')

export const responseToCurrent = (response: WeatherApiResponse, datetime: Dayjs): CurrentWeather => {
  const hours = [...response.days[0].hours, ...response.days[1].hours]
  const currentHourIndex = hours.findIndex(day => day.datetime === datetimeToString(datetime))
  const hourlyForecast = hours.slice(currentHourIndex, currentHourIndex + 6)

  return {
    resolvedAddress: response.resolvedAddress,
    currentConditions: response.currentConditions,
    description: response.description,
    hourlyForecast,
  }
}