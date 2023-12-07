import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from './Button';

describe('Button', () => {
  it('should render children text', () => {
    render(<Button>Foo</Button>)

    const buttonEl = screen.getByRole('button', { name: 'Foo'})
    
    expect(buttonEl).toBeVisible()
  })
})