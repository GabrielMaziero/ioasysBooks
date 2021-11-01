import styled from 'styled-components/native';

export const LoginContainer = styled.ImageBackground`
  background: ${({theme}) => theme.colors.background_primary};
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const LoginView = styled.View`
  width: 100%;
  height: 224px;
  padding-left: 17px;
  padding-right: 17px;
`;

export const LoginHeader = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 25px;
`;

export const LoginLogo = styled.Image``;

export const LoginForm = styled.View`
  justify-content: center;
`;

export const LoginTitle = styled.Text`
  margin-left: 16.6px;
  font-family: Heebo;
  font-style: normal;
  font-weight: 300;
  font-size: 28px;
  line-height: 40px;
  color: ${({theme}) => theme.colors.color_primary};
`;

export const LoginInput = styled.TextInput.attrs(props => ({
  selectionColor: '#FFFFFF' || props.selectionColor,
}))`
  width: 100%;
  height: 60px;
  padding-left: 10px;
  padding-top: 10px;
  color: ${({theme}) => theme.colors.color_primary};
  background: ${({theme}) => theme.colors.background_tertiary};
  border-radius: 4px;
  font-family: Heebo;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
`;

export const LoginInputLabel = styled.Text`
  top: 20px;
  font-family: Heebo;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: ${({theme}) => theme.colors.color_primary};
  opacity: 0.5;
  padding-left: 10px;
`;

export const LoginButton = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.colors.color_primary};
  border-radius: 44px;
  width: 85px;
  height: 36px;
  position: absolute;
  left: 240px;
  top: 104px;
  align-items: center;
  justify-content: center;
`;

export const LoginButtonText = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: ${({theme}) => theme.colors.color_tertiary};
  font-family: Heebo;
`;
