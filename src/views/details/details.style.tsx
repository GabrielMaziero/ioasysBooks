import styled from 'styled-components/native';

export const DetailsContainer = styled.SafeAreaView`
  background: #ffffff;
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
  font-weight: 500;
  font-size: 28px;
  line-height: 40px;
  margin-top: 40px;
`;

export const DetailsAuthors = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  color: #ab2680;
`;

export const DetailsDescription = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 28.5px;
  color: #333333;
  text-align: left;
`;
