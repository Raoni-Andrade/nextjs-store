import { screen } from '@testing-library/react'
import 'jest-styled-components'

import Heading from '.'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<Heading />', () => {
  it('Does it render a white heading by default?', () => {
    // renderizar o componente `render`
    renderWithTheme(<Heading>Won Games</Heading>)
    // selecionar o elemento a ser testado `screen` (queries) - getByLabel
    // expect - assertion - asserção - comparação - análise (espero que renderize a logo branca)
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('Does it render a black heading when color param is passed?', () => {
    renderWithTheme(<Heading color="black">Won Games</Heading>)
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      color: '#030517'
    })
  })

  it('Does it render a heading lineLeft?', () => {
    renderWithTheme(<Heading lineLeft>Won Games</Heading>)
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      'border-left': '0.7rem solid #F231A5'
    })
  })

  it('Does it render a heading lineBottom?', () => {
    renderWithTheme(<Heading lineBottom>Won Games</Heading>)
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyleRule(
      'border-bottom',
      '0.5rem solid #F231A5',
      {
        modifier: '::after'
      }
    )
  })

  it('Does it render a small size heading?', () => {
    renderWithTheme(<Heading size="small">Won Games</Heading>)
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      'font-size': '1.6rem'
    })

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyleRule(
      'width',
      '3rem',
      {
        modifier: '::after'
      }
    )
  })

  it('Does it render a huge size heading?', () => {
    renderWithTheme(<Heading size="huge">Won Games</Heading>)
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      'font-size': '5.2rem'
    })
  })

  it('Does it render a heading with a secondary line color?', () => {
    renderWithTheme(
      <Heading lineColor="secondary" lineLeft lineBottom>
        Won Games
      </Heading>
    )

    const heading = screen.getByRole('heading', { name: /won games/i })
    expect(heading).toHaveStyle({
      'border-left': '0.7rem solid #3CD3C1'
    })
    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #3CD3C1', {
      modifier: '::after'
    })
  })
})
