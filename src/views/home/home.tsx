import React from 'react';
import {
  BooksAuthors,
  BooksCards,
  BooksCardsInfos,
  BooksContainer,
  BooksImage,
  BooksImageView,
  BooksText,
  BooksTitle,
} from './home.style';
// import data from './data';

const Home: React.FC = () => {
  const data = {
    authors: ['Roberta Saraiva', 'Bruna Macedo'],
    title: 'Aspernatur',
    description:
      'Molestiae adipisci asperiores. Incidunt natus nulla. Fuga ab et esse dolorum eum ipsam consequatur.\n \rIn ullam quia ullam tempore adipisci nam. Id mollitia fugiat eaque omnis nihil distinctio exercitationem ex. Minima quo consequatur recusandae consequuntur tempora nihil eaque. Rerum occaecati nisi eum excepturi mollitia.',
    pageCount: 1197,
    category: 'Comportamento',
    imageUrl: 'https://files-books.ioasys.com.br/Book-6.jpg',
    language: 'Português',
    isbn10: '8451010563',
    isbn13: '749-8451010563',
    publisher: 'Carvalho, Saraiva and Moraes',
    published: 2020,
    id: '60171639faf5de22b804a15a',
  };

  return (
    <BooksContainer>
      <BooksCards>
        <BooksImageView>
          <BooksImage source={{uri: data.imageUrl}} resizeMode="contain" />
        </BooksImageView>
        <BooksCardsInfos>
          <BooksTitle>{data.title}</BooksTitle>
          {data.authors.map(author => (
            <BooksAuthors key={author}>{author}</BooksAuthors>
          ))}
          <BooksText>{data.pageCount}</BooksText>
          <BooksText>{data.publisher}</BooksText>
          <BooksText>{data.published}</BooksText>
        </BooksCardsInfos>
      </BooksCards>
    </BooksContainer>
  );
};

export default Home;
