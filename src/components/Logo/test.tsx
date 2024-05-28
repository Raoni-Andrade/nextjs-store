import { screen } from '@testing-library/react'

import Logo from '.'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<Logo />', () => {
  it('Does it render a white logo by default?', () => {
    // renderizar o componente `render`
    renderWithTheme(<Logo />)
    // selecionar o elemento a ser testado `screen` (queries) - getByLabel
    // expect - assertion - asserção - comparação - análise (espero que renderize a logo branca)
    expect(screen.getByLabelText(/Won Games Logo/i).parentElement).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('Does it render a black logo when color param is passed?', () => {
    renderWithTheme(<Logo color="black" />)
    expect(screen.getByLabelText(/Won Games Logo/i).parentElement).toHaveStyle({
      color: '#030517'
    })
  })
})
