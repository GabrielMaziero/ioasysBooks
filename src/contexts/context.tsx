import React from 'react';
import api from '../services/api';
import {AppContextType} from '../model/navigation.models';
import AsyncStorage from '@react-native-async-storage/async-storage';

const defaultState = {
  signed: false,
  token: '',
  signOut: () => {},
  signIn: () => {},
};

const Context = React.createContext<AppContextType>(defaultState);

export const AuthProvider: React.FC = ({children}: any) => {
  const [token, setToken] = React.useState<string>('');

  React.useEffect(() => {
    async function loadStoragedData() {
      try {
        const storagedToken = await AsyncStorage.getItem('@FCAuth:token');

        if (storagedToken) {
          setToken(storagedToken);
        }
      } catch (error) {
        console.log(error);
      }
    }

    loadStoragedData();
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      const response = await api.post('/auth/sign-in', {
        email: email,
        password: password,
      });
      await AsyncStorage.setItem(
        '@FCAuth:token',
        response.headers.authorization,
      );
      setToken(response.headers.authorization);
    } catch (error) {
      console.error(error);
    }
  };

  const signOut = () => {
    AsyncStorage.clear().then(() => {
      setToken('');
    });
  };
  return (
    <Context.Provider
      value={{
        signed: !!token,
        token,
        signOut,
        signIn,
      }}>
      {children}
    </Context.Provider>
  );
};

export default Context;
