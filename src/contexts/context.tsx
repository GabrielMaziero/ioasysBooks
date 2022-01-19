import React from 'react';
import api from '../services/api';
import {AppContextType, User} from '../model/navigation.models';
import AsyncStorage from '@react-native-async-storage/async-storage';

const defaultState = {
  signed: false,
  user: {},
  token: '',
  refreshToken: '',
  signOut: () => {},
  signIn: () => {},
};

const Context = React.createContext<AppContextType>(defaultState);

export const AuthProvider: React.FC = ({children}: any) => {
  const [token, setToken] = React.useState<string>('');
  const [refreshToken, setRefreshToken] = React.useState<string>('');
  const [user, setUser] = React.useState<User>({});

  React.useEffect(() => {
    async function loadStoragedData() {
      try {
        const storagedToken = await AsyncStorage.getItem('@FCAuth:token');
        const storagedUser = await AsyncStorage.getItem('@FCAuth:user');
        const storagedRefreshToken = await AsyncStorage.getItem(
          '@FCAuth:refreshToken',
        );

        if (storagedToken && storagedUser && storagedRefreshToken) {
          setToken(storagedToken);
          setUser(JSON.parse(storagedUser));
          setRefreshToken(storagedRefreshToken);
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
      const tokenStorage = ['@FCAuth:token', response.headers.authorization];
      const userStorage = ['@FCAuth:user', JSON.stringify(response.data)];
      const refresTokenStorage = [
        '@FCAuth:refreshToken',
        response.headers['refresh-token'],
      ];

      await AsyncStorage.multiSet([
        tokenStorage,
        userStorage,
        refresTokenStorage,
      ]);
      setUser(response.data);
      setToken(response.headers.authorization);
      setRefreshToken(response.headers['refresh-token']);
    } catch (error) {
      console.error(error);
    }
  };

  // const getRefreshToken = async () => {
  //   try {
  //     const response = await api.post('/refresh-token', {
  //       headers: {'content-type': 'application/x-www-form-urlencoded'},
  //       data: {
  //         grant_type: 'authorization_code',
  //         client_id: user.id,
  //         code: `Bearer ${token}`,
  //         // redirect_uri: 'https://YOUR_APP/callback',
  //       },
  //     });
  //     await AsyncStorage.setItem(
  //       '@FCAuth:token',
  //       response.headers.authorization,
  //     );
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const signOut = () => {
    AsyncStorage.clear().then(() => {
      setToken('');
    });
  };
  return (
    <Context.Provider
      value={{
        signed: !!token,
        user,
        token,
        refreshToken,
        signOut,
        signIn,
      }}>
      {children}
    </Context.Provider>
  );
};

export default Context;
