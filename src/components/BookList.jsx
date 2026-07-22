import React from 'react';
import BookCard from './BookCard';
import books from '../data/books';

const BookList = ({readList, onAddBook, onRemoveBook}) => {
  return (
    <>
    <div className='book-section'>
    <h2 className='book-section-h2'>FEATURED BOOKS</h2>
     <div className='book-list'>
      {books.map ((book) => {
          const id = book.id
        return(
        <BookCard key={id} book={book}
        onAddBook={onAddBook} isAdded={readList.some(item => item.id === book.id)}/>
    )}
        )}
    </div>
      </div>
    </>
   
  );
}

export default BookList;
