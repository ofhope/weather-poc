
interface CurrentWeatherProps {
  icon: string,
  temp: number,
  description: string,
  location: string
}

export const CurrentWeather = ({icon, temp, description, location}: CurrentWeatherProps) => {
  return (
    <>
      <p>{icon}</p>
      <p>{temp.toString()}°C</p>
      <p>{description}</p>
      <p>{location}</p>
    </>
  )
}