import React from 'react';
import books from '../data/books';

const CatalogueCard = ({book}) => {
  return (
    <>
    <div className='catalogue-card'>
        <img src={book.poster} alt=''/>
        <div>
            <h4>{book.title}</h4>
            <span> <strong>Author:</strong> {book.author}</span>
            <p> <strong>Category:</strong> {book.category}</p>
            <p><strong>Year:</strong> {book.year}</p>
            <p><strong>Pages:</strong> {book.pages} </p>
            <p>{book.description}</p>
        </div>
        </div>
    </>
     
  );
}

export default CatalogueCard;
