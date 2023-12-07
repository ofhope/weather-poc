import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Header } from './Header';

describe('Header', () => {
  it('should render with role menubar', () => {
    render(<Header>Foo</Header>)

    const headerEl = screen.getByRole('meanbar')
    
    expect(headerEl).toBeVisible()
  })
})