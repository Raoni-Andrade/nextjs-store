import { Story, Meta } from '@storybook/react/types-6-0'
import TextField, { TextFieldProps } from '.'
import { Email } from '@styled-icons/material-outlined'

export default {
  title: 'Form/TextField',
  component: TextField,
  args: {
    label: 'E-mail',
    labelFor: 'Email',
    icon: <Email />,
    id: 'Email',
    initialValue: '',
    placeholder: 'ada.lovelace@gmail.com'
  },
  argTypes: {
    onInput: { action: 'changed' }
  }
} as Meta

export const Default: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
)

export const withError: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
)

withError.args = {
  error: 'Ops... something is wrong'
}
