import styled from 'styled-components/native';

export const LoginContainer = styled.SafeAreaView`
  background: #ffffff;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const LoginView = styled.View`
  width: 288px;
  height: 224px;
`;

export const LoginInput = styled.TextInput`
  width: 288px;
  height: 60px;
  padding-left: 10px;
  padding-top: 10px;
  color: white;
  background: rgba(0, 0, 0, 0.32);
  /* backdrop-filter: blur(2px); */
  border-radius: 4px;
`;

export const LoginInputLabel = styled.Text`
  width: 259px;
  height: 16px;
  top: 20px;
  left: 10px;

  /* font-family: Heebo; */
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  /* identical to box height, or 133% */
  color: black;
  opacity: 0.5;
`;

export const LoginButton = styled.TouchableOpacity`
  background-color: white;
  border-radius: 44px;
  width: 85px;
  height: 36px;
  position: absolute;
  left: 180px;
  top: 104px;
  align-items: center;
  justify-content: center;
`;

export const LoginButtonText = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #b22e6f;
`;
