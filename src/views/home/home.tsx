import {useNavigation} from '@react-navigation/core';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import background from '../../assets/images/backgroundHome.png';
import iconFilter from '../../assets/images/filter.png';
import iconSearch from '../../assets/images/iconSearch.png';
import logo from '../../assets/images/logoBlack.png';
import logOutButton from '../../assets/images/LogOut.png';
import Context from '../../contexts/context';
import {Book} from '../../model/book.models';
import {RootStackParamList} from '../../model/navigation.models';
import api from '../../services/api';
import ListBooks from './components/list-books';
import ModalFilter from './components/modal-filter';
import {
  BooksButtonLogOut,
  BooksContainer,
  BooksFilter,
  BooksFilterButton,
  BooksHeader,
  BooksHeaderTitle,
  BooksImageBackground,
  BooksList,
  BooksLogo,
  BooksLogoTitle,
  BooksLogOut,
  BooksSearchFilter,
  BooksSearchIcon,
  BooksSearchInput,
} from './home.style';

type homeScreenProp = NativeStackNavigationProp<RootStackParamList, 'Details'>;

const Home: React.FC = () => {
  const [page, setPage] = React.useState<number>(1);
  const [books, setBooks] = React.useState<Book[]>([]);
  const [booksFiltred, setBooksFiltred] = React.useState<Book[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const [searchValue, setSearchValue] = React.useState<string>('');
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
      const newDate = filterBooks([...response.data.data], searchValue);
      setBooks([...books, ...response.data.data]);
      setBooksFiltred([...booksFiltred, ...newDate]);
    } catch (error) {
      console.log(error);
    }
  };

  const navigateToDetails = (book: any) => {
    navigate('Details', book);
  };
  const renderItem = ({item}: any) => (
    <ListBooks data={item} onPress={navigateToDetails} />
  );

  const HandlerFilter = () => setShowModal(!showModal);

  const logOut = async () => {
    signOut();
  };

  const filterBooks = (data: Book[], query: string) => {
    return data.filter(book => {
      if (book?.title?.toLowerCase().indexOf(query) > -1) {
        return true;
      }
    });
  };

  const handlerSearch = (text: string) => {
    if (text) {
      const formatText = text.toLowerCase();
      const filteredData = filterBooks(books, formatText);
      setSearchValue(text);
      setBooksFiltred([...filteredData]);
    } else {
      setBooksFiltred(books);
      setSearchValue(text);
    }
  };

  React.useEffect(() => {
    getBooks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <ModalFilter showModal={showModal} />
      <BooksImageBackground source={background}>
        <BooksContainer>
          <BooksHeader>
            <BooksLogoTitle>
              <BooksLogo source={logo} />
              <BooksHeaderTitle>Books</BooksHeaderTitle>
            </BooksLogoTitle>
            <BooksButtonLogOut onPress={logOut}>
              <BooksLogOut source={logOutButton} />
            </BooksButtonLogOut>
          </BooksHeader>
          <BooksSearchFilter>
            <BooksSearchInput
              value={searchValue}
              onChangeText={e => handlerSearch(e)}
              placeholder="Procure um livro"
            />
            <BooksSearchIcon source={iconSearch} />
            <BooksFilterButton onPress={HandlerFilter}>
              <BooksFilter source={iconFilter} />
            </BooksFilterButton>
          </BooksSearchFilter>
          <BooksList
            data={booksFiltred}
            keyExtractor={book => String(book.id)}
            showsVerticalScrollIndicator={false}
            onEndReached={() => getBooks()}
            onEndReachedThreshold={0.2}
            renderItem={renderItem}
          />
        </BooksContainer>
      </BooksImageBackground>
    </>
  );
};

export default Home;
