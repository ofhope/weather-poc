import { WeatherIcon } from "../../domain/types"
import { Icon } from "../icon"
import { HourRow } from "./styles"

interface ForecastItemProps {
  icon: WeatherIcon,
  temp: number,
  datetime: string,
}

export const ForecastItem = ({icon, temp, datetime}: ForecastItemProps) => {
  return (
    <HourRow>
      <Icon variant={icon} size="small" />
      <p>{temp.toString()}°C</p>
      <p>{datetime}</p>
    </HourRow>
  )
}