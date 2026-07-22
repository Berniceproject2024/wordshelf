import React from 'react';
import books from '../data/books';


const BookCard = ({ book, onAddBook, isAdded }) => {
    function AddBook(){onAddBook(book)}

  console.log(book.poster);
  return (
    <div className='book-card'>
        <img src={book.poster} alt=''/>
        <div>
            <h4>{book.title}</h4>
            <span> <strong>Author:</strong> {book.author}</span>
            <p> <strong>Category:</strong> {book.category}</p>
            <p><strong>Year:</strong> {book.year}</p>
            <p><strong>Pages:</strong> {book.pages} </p>
        </div>
        <div className='book-card-button'>
         <button onClick={AddBook} disabled={isAdded}>{isAdded ? "Added ✔" : "Add to readlist"}</button>
        </div>
    </div>
  );
}

export default BookCard;
