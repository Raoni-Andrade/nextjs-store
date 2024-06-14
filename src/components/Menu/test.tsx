import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Menu from '.'

describe('<Menu />', () => {
  it('Does it render the menu?', () => {
    renderWithTheme(<Menu />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/open shopping cart/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/logo/i)).toBeVisible()
    expect(screen.getByRole('img', { name: /won games/i })).toBeVisible()
    expect(screen.getByRole('img', { name: /won games/i })).toBeInTheDocument()
  })
})
