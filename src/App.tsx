import { useCallback } from 'react'
import './App.css'
import { useWeather } from './hooks/useWeather'
import { Header } from './components/header/Header'
import dayjs from 'dayjs'
import { BAD_INPUT_ERROR, NETWORK_ERROR } from './hooks/useWeather.types'
import { PageContainer } from './components/pagecontainer'
import { Search } from './components/search'
import { Message } from './components/message/Message'
import { Weather } from './components/weather'
import { Forecast } from './components/forecast'
import { Container } from './components/container'

function App() {
  const { loading, result, searchCity } = useWeather(import.meta.env.VITE_VISUALCROSSING_TOKEN)

  const handleSubmit = useCallback((query: string) => {
    searchCity(query, dayjs())
  }, [searchCity])

  return (
    <PageContainer>
      <Header>
        <Search onSearch={handleSubmit} />
      </Header>
      {!loading && result === undefined && (
        <Message>Welcome to weather search. Type a city in the search input above to find current weather conditions.</Message>
      )}
      {loading && (
        <Container>
          Loading...
        </Container>
      )}
      {!loading && result === BAD_INPUT_ERROR && (
        <Message>There was an error searching for that city. Try again.</Message>
      )}
      {!loading && result === NETWORK_ERROR && (
        <Message>Something went wrong. Try again later or contact the adminstrator.</Message>
      )}
      {!loading && result && result != NETWORK_ERROR && result != BAD_INPUT_ERROR &&  (
        <Container>
          <Weather description={result.description} location={result.resolvedAddress} icon={result.currentConditions.icon} temp={result.currentConditions.temp} />
          <Forecast hours={result.hourlyForecast} />
        </Container>
      )}
    </PageContainer>
  )
}

export default App
