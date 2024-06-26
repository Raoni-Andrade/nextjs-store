import { screen } from '@testing-library/react'

import Home from '.'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<Home />', () => {
  it('Does it render Menu and Footer?', () => {
    const { container } = renderWithTheme(<Home />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /contact us/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /follow us/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /links/i })).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /location/i })
    ).toBeInTheDocument()
  })

  it('Does it render the sections?', () => {
    renderWithTheme(<Home />)

    expect(screen.getByRole('heading', { name: /news/i })).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /most populars/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /upcoming/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /free games/i })
    ).toBeInTheDocument()
  })
})
