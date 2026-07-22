import React, { useState } from 'react';
import BookList from './BookList';
import ReadList from './ReadList';
import Main from './Main';
import books from '../data/books';
import Footer from './Footer';

const Hero = () => {
  const [readList, setReadList] = useState([])

  function addBook(book){
    setReadList(prevReadList => {
    const existingItem = readList.some 
    (item => item.id === book.id)

    if(existingItem) {
      return prevReadList;
    }
    return [...prevReadList, book];
}
)
    }
  
  const removeBook = (deleteIndex) =>{
    setReadList(prevReadList => prevReadList.filter((book, index) => index !== deleteIndex))
  }
  return (
    <>
    <div className='page-container'>
      <Main/>
    <div className='hero-section'>
      <BookList bookList={books} readList={readList} onAddBook={addBook} onRemoveBook={removeBook}/>
      <ReadList readList={readList} onAddBook={addBook} onRemoveBook={removeBook}/>
    </div>
    <Footer/>
    </div>
    
    </>
  );
}

export default Hero;
