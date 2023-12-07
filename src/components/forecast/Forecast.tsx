import { ForecastItem } from "./ForecastItem"

interface Forecast {
  icon: string,
  temp: number,
  datetime: string,
}

interface ForecastProps {
  hours: Forecast[]
}

export const Forecast = ({ hours }: ForecastProps) => {
  return (
    <>
      {hours.map((hour) => <ForecastItem icon={hour.icon} temp={hour.temp} datetime={hour.datetime} />)}
    </>
  )
}