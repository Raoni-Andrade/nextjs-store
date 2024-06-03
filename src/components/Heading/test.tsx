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
      'border-left': '0.7rem solid #3CD3C1'
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
})
