import React from 'react';
import { useState } from 'react';
import { about, author, bookcatalogue, categories, home } from '../data/routes';
import { Link } from 'react-router-dom';

const Nav = () => {
    const [language, setLanguage] = useState()

  return (
    <>
    <div className='nav'>
        <div className='title'><img src='/assets/bread.webp' alt='' className='moviebox-img'/>
         <h1>FAITH SHELF</h1>  </div>
         <div className='nav-list'>
            <Link to={home}><p>HOME</p></Link>
           <Link to={bookcatalogue}><p>BOOKS</p></Link>
            <Link to={categories}><p>CATEGORIES</p></Link>
            <Link to={author}><p>AUTHORS</p></Link>
            <Link to={about}><p>ABOUT</p></Link>
         </div>
         <div className='select-option'>
             <select
      value={language}
      onChange={(e) => setLanguage(e.target.value)}
    >
      <option value="en">EN</option>
      <option value="es">ES</option>
      <option value="fr">FR</option>
      <option value="ja">JA</option>
      <option value="it">IT</option>
    </select>
    <button>SIGN IN</button>
         </div>
    </div>
    </>
    
  );
}

export default Nav;
