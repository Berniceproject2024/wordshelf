import React from 'react';
import { Link } from 'react-router-dom';
import { about, author, categories, home } from '../data/routes';
import books from '../data/books';

const Footer = () => {
  return (
    <div className='footer'>
      <h4>FaithShelf</h4>
      <p>-----------</p>
      <p>Discover timeless Christian books that inspire faith and</p>
      <p>spiritual growth.</p>
      <br/>
      <br/>
      <h4>Quick Links</h4>
      <p>-----------</p>
      <Link to={home}><p>Home</p></Link>
      <Link to={books}><p>Books</p></Link>
      <Link to={categories}><p>Categories</p></Link>
      <Link to={author}><p>Authors</p></Link>
      <Link to={about}><p>About</p></Link>
      <br/>
      <br/>
      <h4>Categories</h4>
      <p>----------</p>
      <p>Bible Study</p>
      <p>Prayer</p>
      <p>Christian Living</p>
      <p>Devotionals</p>
      <br/>
      <br/>
      <h4>Verse</h4>
      <p>-----</p>
      <p>"Let the word of Christ dwell in you richly."</p>
      <p>Colossians 3:16</p>
    </div>
  );
}

export default Footer;
