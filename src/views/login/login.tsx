import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import background from '../../assets/images/bg.png';
import logo from '../../assets/images/Logo.png';
import Context from '../../contexts/context';
import {RootStackParamList} from '../../model/navigation.models';
import {ValidateEmail} from '../../utils/validate-email';
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
  const {signIn} = React.useContext(Context);

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

      signIn(email, password);
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
