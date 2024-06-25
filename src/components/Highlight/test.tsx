import { screen } from '@testing-library/react'

import Highlight from '.'
import { renderWithTheme } from 'utils/tests/helpers'
import * as S from './styles'

const props = {
  title: 'Red Dead it’s back',
  subtitle: 'Come see John’s new adventures',
  buttonLabel: 'Buy now',
  buttonLink: '/rdr2',
  backgroundImage: '/img/red-dead-img.jpg',
  floatImage: '/img/red-dead-float.png'
}

describe('<Highlight />', () => {
  it('Does it render the headings and button?', () => {
    renderWithTheme(<Highlight {...props} />)

    expect(
      screen.getByRole('heading', { name: /red dead it’s back/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /come see john’s new adventures/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /buy now/i })).toBeInTheDocument()
  })

  it('Does it render the background image?', () => {
    const { container } = renderWithTheme(<Highlight {...props} />)

    expect(container.firstChild).toHaveStyle({
      backgroundImage: `url(${props.backgroundImage})`
    })
  })

  it('Does it render the float image?', () => {
    renderWithTheme(<Highlight {...props} floatImage={props.floatImage} />)

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      '/img/red-dead-float.png'
    )
  })

  it('Does it render the float image on the right side by default?', () => {
    const { container } = renderWithTheme(<Highlight {...props} />)

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'floatimage content'"
    )

    expect(container.firstChild).toHaveStyleRule('text-align', 'right', {
      modifier: `${S.Content}`
    })
  })

  it('Does it render the float image on the left side when alignment is passed?', () => {
    const { container } = renderWithTheme(
      <Highlight {...props} alignment="left" />
    )

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'content floatimage'"
    )

    expect(container.firstChild).toHaveStyleRule('text-align', 'left', {
      modifier: `${S.Content}`
    })
  })
})
