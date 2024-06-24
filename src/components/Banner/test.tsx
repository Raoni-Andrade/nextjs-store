import { screen } from '@testing-library/react'

import Banner from '.'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<Banner />', () => {
  it('Does it correctly render the Banner?', () => {
    const { container } = renderWithTheme(
      <Banner
        img={''}
        title={''}
        subtitle={''}
        buttonLabel={''}
        buttonLink={''}
      />
    )

    expect(screen.getByRole('heading', { name: /Banner/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
