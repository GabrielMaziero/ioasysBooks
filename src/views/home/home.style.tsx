import {FlatList} from 'react-native';
import styled from 'styled-components/native';

export const BooksContainer = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const BooksCards = styled.View`
  border-radius: 4px;
  height: 160px;
  background-color: white;
  flex-direction: row;
  box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.13);
  margin: 0 20px 10px 20px;
`;

export const BooksList = styled(FlatList as new () => FlatList<any>)`
  width: 100%;
`;

export const BooksCardsInfos = styled.View`
  padding: 10px;
`;

export const BooksImage = styled.Image`
  width: 81px;
  height: 122px;
`;
export const BooksImageView = styled.View`
  justify-content: center;
  padding: 14px;
`;

export const BooksTitle = styled.Text`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: #333333;
`;

export const BooksAuthors = styled.Text`
  font-size: 12px;
  font-weight: normal;
  line-height: 20px;
  color: #ab2680;
`;

export const BooksText = styled.Text`
  font-size: 12px;
  font-weight: normal;
  line-height: 20px;
  color: #999999;
  text-align: justify;
`;
