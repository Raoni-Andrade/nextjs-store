import 'match-media-mock'
import { screen } from '@testing-library/react'

import GameCardSlider from '.'
import { renderWithTheme } from 'utils/tests/helpers'

import items from './mock'

describe('<GameCardSlider />', () => {
  it('Does it render with 4 active items?', () => {
    const { container } = renderWithTheme(<GameCardSlider items={items} />)

    expect(container.querySelectorAll('.slick-active')).toHaveLength(4)
  })

  it('Does it render white arrows if color is passed', () => {
    renderWithTheme(<GameCardSlider items={items} color="white" />)

    expect(screen.getByLabelText(/previous games/i)).toHaveStyle({
      color: '#FAFAFA'
    })
    expect(screen.getByLabelText(/next games/i)).toHaveStyle({
      color: '#FAFAFA'
    })
  })
})
