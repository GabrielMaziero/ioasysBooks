import React from 'react';
import {Book} from '../../../model/book.models';
import {
  BooksAuthors,
  BooksCards,
  BooksCardsInfos,
  BooksImage,
  BooksImageView,
  BooksText,
  BooksTitle,
} from './list-books.style';

interface props {
  data: Book;
  onPress: (id: string) => void;
}

const ListBooks: React.FC<props> = ({data, onPress}) => {
  return (
    <BooksCards onPress={() => onPress(data.id)}>
      <BooksImageView>
        <BooksImage source={{uri: data?.imageUrl}} resizeMode="contain" />
      </BooksImageView>
      <BooksCardsInfos>
        <BooksTitle>{data.title}</BooksTitle>
        {data.authors?.map((author: string) => (
          <BooksAuthors key={author}>{author}</BooksAuthors>
        ))}
        <BooksText>{`${data.pageCount} páginas`}</BooksText>
        <BooksText>{`Editora ${data.publisher}`}</BooksText>
        <BooksText>{`Publicado em ${data.published}`}</BooksText>
      </BooksCardsInfos>
    </BooksCards>
  );
};

export default ListBooks;
