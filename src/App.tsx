import { useCallback } from 'react'
import { useWeather } from './hooks/useWeather'
import { Header } from './components/header/Header'
import dayjs from 'dayjs'
import { PageContainer } from './components/pagecontainer'
import { Search } from './components/search'
import { ResultSummary } from './components/result-summary'

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
      <ResultSummary loading={loading} result={result} />
    </PageContainer>
  )
}

export default App
