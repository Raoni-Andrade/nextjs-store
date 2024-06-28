import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Checkbox from '.'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<Checkbox />', () => {
  it('Does it render with label?', () => {
    renderWithTheme(<Checkbox label="checkbox label" labelFor="check" />)

    expect(screen.getByRole('checkbox')).toBeInTheDocument()
    expect(screen.getByLabelText(/checkbox label/i)).toBeInTheDocument()
    expect(screen.getByText(/checkbox label/i)).toHaveAttribute('for', 'check')
  })

  it('Does it not render label if no label is passed?', () => {
    renderWithTheme(<Checkbox />)

    expect(screen.queryByLabelText('Checkbox')).not.toBeInTheDocument()
  })

  it('Does it render with black label?', () => {
    renderWithTheme(
      <Checkbox label="checkbox label" labelFor="check" labelColor="black" />
    )

    expect(screen.getByText(/checkbox label/i)).toHaveStyle({
      color: '#030517'
    })
  })

  it('Does it dispatch onCheck when status changes?', async () => {
    const onCheck = jest.fn()

    renderWithTheme(
      <Checkbox label="checkbox label" onCheck={onCheck} isChecked />
    )

    expect(onCheck).not.toHaveBeenCalled()

    userEvent.click(screen.getByRole('checkbox'))
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
      expect(onCheck).toHaveBeenCalledWith(false)
    })
  })
})
