import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation, useRoute} from '@react-navigation/core';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import backArrow from '../../assets/images/backArrow.png';
import {Book} from '../../model/book.models';
import {RootStackParamList} from '../../routes/stack.routes';
import api from '../../services/api';
import {
  DetailsAuthors,
  DetailsBack,
  DetailsButton,
  DetailsContainer,
  DetailsContent,
  DetailsDescription,
  DetailsImage,
  DetailsTitle,
} from './details.style';

type detailsScreenProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const Details: React.FC = () => {
  const [book, setBook] = React.useState<Book>();
  const {goBack} = useNavigation<detailsScreenProp>();
  const id = useRoute().params;

  const getDetails = async () => {
    try {
      const token = await AsyncStorage.getItem('@FCAuth:token');
      const response = await api.get(`/books/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setBook(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <DetailsContainer>
      <DetailsButton onPress={() => goBack()}>
        <DetailsBack source={backArrow} />
      </DetailsButton>
      <DetailsContent>
        <DetailsImage source={{uri: book?.imageUrl}} />
        <DetailsTitle>{book?.title}</DetailsTitle>
        <DetailsAuthors>
          {book?.authors.map(author => `${author} `)}
        </DetailsAuthors>
        <DetailsDescription>INFORMAÇÕES</DetailsDescription>
      </DetailsContent>
    </DetailsContainer>
  );
};

export default Details;
