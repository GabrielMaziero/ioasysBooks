import {useNavigation} from '@react-navigation/core';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {RootStackParamList} from '../../routes/stack.routes';
import {ValidateEmail} from '../../utils/validate-email';
import {
  LoginButton,
  LoginButtonText,
  LoginContainer,
  LoginInput,
  LoginInputLabel,
  LoginView,
} from './login.style';

type homeScreenProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const Login: React.FC = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const {navigate} = useNavigation<homeScreenProp>();

  const handlerLogin = async () => {
    try {
      if (!email || !password) {
        return;
      }
      const isValid = ValidateEmail(email);

      if (!isValid) {
        console.error('Email invalido');
        return;
      }
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
      navigate('Home');
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
