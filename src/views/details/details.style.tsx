import styled from 'styled-components/native';

export const DetailsContainer = styled.SafeAreaView`
  background: ${({theme}) => theme.colors.background_primary};
  flex: 1;
`;

export const DetailsContent = styled.View`
  flex: 1;
  align-items: center;
`;

export const DetailsButton = styled.TouchableOpacity`
  justify-content: flex-start;
  margin: 22px 0px 0px 16px;
`;

export const DetailsBack = styled.Image``;

export const DetailsImage = styled.Image`
  top: 22px;
  width: 300px;
  height: 411px;
`;

export const DetailsTitle = styled.Text`
  font-family: Heebo;
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 40px;
  margin-top: 40px;
`;

export const DetailsAuthors = styled.Text`
  font-family: Heebo;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  color: ${({theme}) => theme.colors.color_quatenary};
`;

export const DetailsDescription = styled.Text`
  font-family: Heebo;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 28.5px;
  color: ${({theme}) => theme.colors.color_secondary};
  text-align: left;
`;
