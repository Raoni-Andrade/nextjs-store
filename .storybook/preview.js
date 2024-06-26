import { RouterContext } from 'next/dist/shared/lib/router-context'
import GlobalStyles from 'styles/global'
import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'

export const parameters = {
  backgrounds: {
    default: 'ray-light',
    values: [
      {
        name: 'ray-light',
        value: theme.colors.white
      },
      {
        name: 'ray-dark',
        value: theme.colors.mainBg
      }
    ]
  },
  nextRouter: {
    Provider: RouterContext.Provider
  }
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles removeBg />
      <Story />
    </ThemeProvider>
  )
]
