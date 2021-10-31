import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/core';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {RootStackParamList} from '../../model/navigation.models';
import api from '../../services/api';
import {ValidateEmail} from '../../utils/validate-email';
import background from '../../assets/images/bg.png';
import logo from '../../assets/images/Logo.png';
import {
  LoginButton,
  LoginButtonText,
  LoginContainer,
  LoginForm,
  LoginHeader,
  LoginInput,
  LoginInputLabel,
  LoginLogo,
  LoginTitle,
  LoginView,
} from './login.style';

type homeScreenProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const Login: React.FC = () => {
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
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
      const response = await api.post('/auth/sign-in', {
        email: email,
        password: password,
      });
      AsyncStorage.setItem('@FCAuth:token', response.headers.authorization);
      navigate('Home');
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <LoginContainer source={background}>
      <LoginView>
        <LoginHeader>
          <LoginLogo source={logo} />
          <LoginTitle>Books</LoginTitle>
        </LoginHeader>
        <LoginForm>
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
        </LoginForm>
      </LoginView>
    </LoginContainer>
  );
};

export default Login;
