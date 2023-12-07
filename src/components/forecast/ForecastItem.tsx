
interface ForecastItemProps {
  icon: string,
  temp: number,
  datetime: string,
}

export const ForecastItem = ({icon, temp, datetime}: ForecastItemProps) => {
  return (
    <>
      <p>{icon}</p>
      <p>{temp.toString()}°C</p>
      <p>{datetime}</p>
    </>
  )
}