
interface WeatherProps {
  icon: string,
  temp: number,
  description: string,
  location: string
}

export const Weather = ({icon, temp, description, location}: WeatherProps) => {
  return (
    <>
      <p>{icon}</p>
      <p>{temp.toString()}°C</p>
      <p>{description}</p>
      <p>{location}</p>
    </>
  )
}