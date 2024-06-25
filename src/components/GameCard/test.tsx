import { fireEvent, screen } from '@testing-library/react'

import GameCard from '.'
import { renderWithTheme } from 'utils/tests/helpers'

const props = {
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: 'https://source.unsplash.com/user/willianjusten/300x140',
  price: 'R$ 235,00'
}

describe('<GameCard />', () => {
  it('Does it render the GameCard correctly? ', () => {
    renderWithTheme(<GameCard {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: props.developer })
    ).toBeInTheDocument()
    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    )
    expect(screen.getByText('R$ 235,00')).toBeInTheDocument()

    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument()
  })

  it('Does it render price in label?', () => {
    renderWithTheme(<GameCard {...props} />)

    const price = screen.getByText('R$ 235,00')

    expect(price).not.toHaveStyle({
      textDecoration: 'line-through'
    })
    expect(price).toHaveStyle({
      backgroundColor: '#3CD3C1'
    })
  })

  it('Does it render a line-through in price when promotional?', () => {
    renderWithTheme(<GameCard {...props} promotionalPrice="R$ 215,00" />)

    expect(screen.getByText('R$ 235,00')).toHaveStyle({
      textDecoration: 'line-through'
    })
    expect(screen.getByText('R$ 215,00')).not.toHaveStyle({
      textDecoration: 'line-through'
    })
  })

  it('Does it render a filled Favorite icon when favorite is true?', () => {
    renderWithTheme(<GameCard {...props} favorite />)

    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument()
  })

  it('Does it call onFav method when favorite is clicked?', () => {
    const onFav = jest.fn()

    renderWithTheme(<GameCard {...props} favorite onFav={onFav} />)

    fireEvent.click(screen.getAllByRole('button')[0])
    expect(onFav).toBeCalled()

    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument()
  })
})
