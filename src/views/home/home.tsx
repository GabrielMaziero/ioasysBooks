import {useNavigation} from '@react-navigation/core';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import logOutButton from '../../assets/images/LogOut.png';
import Context from '../../contexts/context';
import {Book} from '../../model/book.models';
import {RootStackParamList} from '../../model/navigation.models';
import api from '../../services/api';
import {
  BooksAuthors,
  BooksButtonLogOut,
  BooksCards,
  BooksCardsInfos,
  BooksContainer,
  BooksImage,
  BooksImageView,
  BooksList,
  BooksLogOut,
  BooksText,
  BooksTitle,
} from './home.style';

type homeScreenProp = NativeStackNavigationProp<RootStackParamList, 'Details'>;

const Home: React.FC = () => {
  const [page, setPage] = React.useState<number>(1);
  const [books, setBooks] = React.useState<Book[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const {navigate} = useNavigation<homeScreenProp>();
  const {token, signOut} = React.useContext(Context);

  const getBooks = async () => {
    try {
      if (loading) {
        return;
      }

      setLoading(true);
      const response = await api.get('/books', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {page},
      });
      setPage(page + 1);
      setLoading(false);
      setBooks([...books, ...response.data.data]);
    } catch (error) {
      console.log(error);
    }
  };

  const navigateToDetails = (book: any) => {
    navigate('Details', book);
  };
  const renderItem = ({item}: any) => {
    return (
      <BooksCards onPress={() => navigateToDetails(item.id)}>
        <BooksImageView>
          <BooksImage source={{uri: item.imageUrl}} resizeMode="contain" />
        </BooksImageView>
        <BooksCardsInfos>
          <BooksTitle>{item.title}</BooksTitle>
          {item.authors?.map((author: string) => (
            <BooksAuthors key={author}>{author}</BooksAuthors>
          ))}
          <BooksText>{`${item.pageCount} páginas`}</BooksText>
          <BooksText>{`Editora ${item.publisher}`}</BooksText>
          <BooksText>{`Publicado em ${item.published}`}</BooksText>
        </BooksCardsInfos>
      </BooksCards>
    );
  };

  const logOut = async () => {
    signOut();
  };

  React.useEffect(() => {
    getBooks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BooksContainer>
      <BooksButtonLogOut onPress={logOut}>
        <BooksLogOut source={logOutButton} />
      </BooksButtonLogOut>
      <BooksList
        data={books}
        keyExtractor={book => String(book.id)}
        showsVerticalScrollIndicator={false}
        onEndReached={() => getBooks()}
        onEndReachedThreshold={0.2}
        renderItem={renderItem}
      />
    </BooksContainer>
  );
};

export default Home;
