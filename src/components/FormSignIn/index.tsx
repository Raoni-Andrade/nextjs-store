import TextField from 'components/TextField'
import * as S from './styles'
import { Email, Lock } from 'styled-icons/material-outlined'

const FormSignIn = () => (
  <S.Wrapper>
    <form>
      <TextField
        name="email"
        placeholder="Email"
        type="email"
        icon={<Email />}
      />

      <TextField
        name="password"
        placeholder="Password"
        type="password"
        icon={<Lock />}
      />
    </form>
  </S.Wrapper>
)

export default FormSignIn
