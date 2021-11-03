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

export const BooksSearchFilter = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 20px 30px 20px;
`;

export const BooksSearchInput = styled.TextInput.attrs(props => ({
  selectionColor: '#333333' || props.selectionColor,
}))`
  width: 246px;
  height: 48px;
  border: 1px solid rgba(51, 51, 51, 0.2);
  border-radius: 2px;
  padding-left: 10px;
`;

export const BooksSearchIcon = styled.Image`
  position: absolute;
  left: 220px;
  top: 15px;
`;

export const BooksFilter = styled.Image``;

export const BooksFilterButton = styled.TouchableOpacity``;

export const BooksList = styled(FlatList as new () => FlatList<any>)`
  width: 100%;
`;
