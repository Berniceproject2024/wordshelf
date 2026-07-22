import React from 'react';
import authore from '../data/authore';
import Nav from './Nav';
import Footer from './Footer';

const Author = () => {
  return (
    <div className='page-container'>
        <Nav/>
        <div className='authors-section'>
    <h2 className="authors-section-h2">
    Christian Authors
</h2>

<p className="authors-intro">
    Meet the influential writers whose works have encouraged
    believers, strengthened faith, and pointed generations
    toward Christ.
</p>
     <div className='authors-list'>
      {authore.map ((author) => {
          const id = author.id
        return(
        <div className='author-card' key={id}>
           <img src={author.image} alt=""/>
           <p>{author.name}</p>
          <div className="author-data">
    <span>{author.nationality}</span>
    <span>•</span>
    <span>{author.born} – {author.died}</span>
</div>
           <p className='author-bio'>{author.bio}</p>
           <h4>Notable Works</h4>
           <ul>
    {author.books.map((book, index) => (
        <li key={index}>{book}</li>
    ))}
</ul>
        </div>
    )}
        )}
    </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Author;
