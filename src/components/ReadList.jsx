import React from 'react';
import books from '../data/books';

const ReadList = ({readList, onRemoveBook}) => {
    
  return (
    <div className='read-list'>
      { readList.length === 0? 
      (<div className="empty-readlist">
        <h2>ReadList(0)</h2>
        <p>Your read list is empty</p>
        <p>Add books from the collection to get started.</p>
        </div>)
        :
        (<div>
            <h2>Read List({readList.length})</h2>
            <div className='added-to-readlist'>
                {readList.map((book, id) => {
                    return(
                     <div key={id} className='book-item'>
        <img src={book.poster} alt=''/>
        <div className='readlist-text-content'>
            <h5>{book.title}</h5>
            <p className='book-item-span'>{book.author}</p>
            <span className='book-item-span'> Year: { book.year}</span>
            <span>| Pages:{book.pages}</span>
        </div>
         <button className='remove-from-readlist' onClick={() => onRemoveBook(id)}>Remove from readlist</button>
    </div>  
    
                    )
                })}
                
            </div>
            
        </div>)}
    </div>
  );
}

export default ReadList;
