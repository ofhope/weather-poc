import { WeatherIcon } from "../../domain/types"
import { Column } from "../column"
import { Icon } from "../icon"
import { Description, Temprature, Location } from "./styles"

interface CurrentWeatherProps {
  icon: WeatherIcon,
  temp: number,
  description: string,
  location: string
}

export const CurrentWeather = ({icon, temp, description, location}: CurrentWeatherProps) => {
  return (
    <Column>
      <Icon variant={icon} size="large" />
      <Temprature>{temp.toString()}°C</Temprature>
      <Description>{description}</Description>
      <Location>{location}</Location>
    </Column>
  )
}