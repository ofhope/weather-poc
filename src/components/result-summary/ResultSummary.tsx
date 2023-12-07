import { BAD_INPUT_ERROR, GENERIC_ERROR, WeatherResult } from "../../domain/types"
import { Container } from "../container"
import { Forecast } from "../forecast"
import { Message } from "../message"
import { Weather } from "../weather"

interface WeatherProps {
  loading: boolean,
  result: WeatherResult
}

export const ResultSummary = ({ loading, result }: WeatherProps) => {

  if (loading) {
    return (<Container>Loading...</Container>)
  }

  if (result === undefined) {
    return <Message>Welcome to weather search. Type a city in the search input above to find current weather conditions.</Message>
  }

  if (result === BAD_INPUT_ERROR) {
    return <Message>There was an error searching for that city. Try again.</Message>
  }
  
  if (result === GENERIC_ERROR) {
    return <Message>Something went wrong. Try again later or contact the adminstrator.</Message>
  }

  return (
    <Container>
      <Weather description={result.description} location={result.resolvedAddress} icon={result.currentConditions.icon} temp={result.currentConditions.temp} />
      <Forecast hours={result.hourlyForecast} />
    </Container>
  )
}