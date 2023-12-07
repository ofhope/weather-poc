import { WeatherIcon } from "../../domain/types"
import { Icon } from "../icon"

interface CurrentWeatherProps {
  icon: WeatherIcon,
  temp: number,
  description: string,
  location: string
}

export const CurrentWeather = ({icon, temp, description, location}: CurrentWeatherProps) => {
  return (
    <>
      <Icon variant={icon} size="large" />
      <p>{temp.toString()}°C</p>
      <p>{description}</p>
      <p>{location}</p>
    </>
  )
}