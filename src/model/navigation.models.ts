export interface User {
  birthdate?: string;
  email?: string;
  gender?: string;
  id?: string;
  name?: string;
}
export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Details: undefined;
};

export type AppContextType = {
  signed: boolean;
  user: User;
  token: string;
  refreshToken: string;
  signOut: () => void;
  signIn: (email: string, password: string) => void;
};
