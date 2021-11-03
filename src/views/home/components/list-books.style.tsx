import styled from 'styled-components/native';

export const BooksCards = styled.TouchableOpacity`
  border-radius: 4px;
  height: 160px;
  background-color: white;
  flex-direction: row;
  box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.13);
  margin: 0 20px 10px 20px;
`;

export const BooksImageView = styled.View`
  justify-content: center;
  padding: 14px;
`;

export const BooksImage = styled.Image`
  width: 81px;
  height: 122px;
`;

export const BooksCardsInfos = styled.View`
  padding: 10px;
`;

export const BooksTitle = styled.Text`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  font-family: Heebo;
  font-style: normal;
  color: ${({theme}) => theme.colors.color_secondary};
`;

export const BooksAuthors = styled.Text`
  font-size: 12px;
  font-weight: normal;
  font-family: Heebo;
  font-style: normal;
  line-height: 20px;
  color: ${({theme}) => theme.colors.color_quatenary};
`;

export const BooksText = styled.Text`
  font-size: 12px;
  font-weight: normal;
  font-family: Heebo;
  font-style: normal;
  line-height: 20px;
  color: ${({theme}) => theme.colors.color_quinary};
  text-align: justify;
`;
