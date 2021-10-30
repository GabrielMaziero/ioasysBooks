import React from 'react';
import {
  LoginButton,
  LoginButtonText,
  LoginContainer,
  LoginInput,
  LoginInputLabel,
  LoginView,
} from './login.style';

const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const handlerLogin = async () => {
    try {
      const response = await fetch(
        'https://books.ioasys.com.br/api/v1/auth/sign-in',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        },
      );

      console.log('AQUI====>', response);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <LoginContainer>
      <LoginView>
        <LoginInputLabel>Email</LoginInputLabel>
        <LoginInput
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />
        <LoginInputLabel>Senha</LoginInputLabel>
        <LoginInput
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <LoginButton onPress={handlerLogin}>
          <LoginButtonText>Entrar</LoginButtonText>
        </LoginButton>
      </LoginView>
    </LoginContainer>
  );
};

export default Login;
