import React from 'react';
import books from '../data/books';
import Nav from './Nav';
import CatalogueCard from './CatalogueCard';
import Footer from './Footer';


const BookCatalogue = ({}) => {
  return (
    <div className='page-container'>
        <Nav/>
        <div className='catalogue-section'>
    <h1 className='catalogue-section-h2'>BOOKS</h1>
     <div className='catalogue-list'>
      {books.map ((book) => {
          const id = book.id
        return(
        <CatalogueCard key={id} book={book}/>
    )}
        )}
    </div>
      </div>
      <Footer/>
    </div>
  );
}

export default BookCatalogue;
