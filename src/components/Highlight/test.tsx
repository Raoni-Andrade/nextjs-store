import { screen } from '@testing-library/react'

import Highlight from '.'
import { renderWithTheme } from 'utils/tests/helpers'

const props = {
  title: 'Red Dead it’s back',
  subtitle: 'Come see John’s new adventures',
  buttonLabel: 'Buy now',
  buttonLink: '/rdr2'
}

describe('<Highlight />', () => {
  it('Does it render the headings and button?', () => {
    const { container } = renderWithTheme(<Highlight {...props} />)

    expect(
      screen.getByRole('heading', { name: /red dead it’s back/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /come see john’s new adventures/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /buy now/i })).toBeInTheDocument()
  })
})
