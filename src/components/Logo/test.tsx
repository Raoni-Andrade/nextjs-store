import { screen } from '@testing-library/react'
import 'jest-styled-components'

import Logo from '.'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<Logo />', () => {
  it('Does it render the logo with id passed?', () => {
    const { container } = renderWithTheme(<Logo id="myId" />)
    expect(container.querySelector('#paint_linear_myId')).toBeInTheDocument()
  })

  it('Does it render a white logo by default?', () => {
    renderWithTheme(<Logo />)
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

  it('Does it render a normal logo by default?', () => {
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/Won Games Logo/i).parentElement).toHaveStyle({
      width: '11rem'
    })
  })

  it('Does it render a bigger logo when size param is passed?', () => {
    renderWithTheme(<Logo size="large" />)
    expect(screen.getByLabelText(/Won Games Logo/i).parentElement).toHaveStyle({
      width: '20rem'
    })
  })

  it('Does it render a logo without text if hideOnMobile?', () => {
    renderWithTheme(<Logo hideOnMobile />)
    expect(
      screen.getByLabelText(/Won Games Logo/i).parentElement
    ).toHaveStyleRule('width', '5.8rem', {
      media: '(max-width: 768px)'
    })
  })
})
