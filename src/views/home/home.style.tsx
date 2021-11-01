import {FlatList} from 'react-native';
import styled from 'styled-components/native';

export const BooksImageBackground = styled.ImageBackground`
  flex: 1;
`;
export const BooksContainer = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

export const BooksHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 20px 30px 20px;
`;

export const BooksLogoTitle = styled.View`
  flex-direction: row;
`;

export const BooksLogo = styled.Image``;

export const BooksHeaderTitle = styled.Text`
  margin-left: 16.6px;
  font-family: Heebo;
  font-style: normal;
  font-weight: 300;
  font-size: 28px;
  line-height: 40px;
  color: ${({theme}) => theme.colors.color_secondary};
`;

export const BooksButtonLogOut = styled.TouchableOpacity``;

export const BooksLogOut = styled.Image``;

export const BooksSearchInput = styled.TextInput.attrs(props => ({
  selectionColor: '#333333' || props.selectionColor,
}))`
  width: 246px;
  height: 48px;
  border: 1px solid rgba(51, 51, 51, 0.2);
  border-radius: 2px;
  padding-left: 10px;
`;

export const BooksCards = styled.TouchableOpacity`
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
