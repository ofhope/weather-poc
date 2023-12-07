import { SyntheticEvent, useCallback } from "react";
import { Button } from "../button";
import { Input } from "../input";

interface SearchProps {
  onSearch: (query: string) => void
}
export const Search = ({onSearch}: SearchProps) => {
  const handleSubmit = useCallback((event: SyntheticEvent) => {
    event.preventDefault()
    const target = event.target as typeof event.target & {
      query: { value: string };
    };
    onSearch(target.query.value)
  }, [onSearch])

  return (
    <form onSubmit={handleSubmit} role="search">
      <Input name="query" />
      <Button type="submit">Search</Button>
    </form>
  )
}