import React from 'react';
import { useState } from 'react';
import { about, author, bookcatalogue, categories, home } from '../data/routes';
import { Link } from 'react-router-dom';

const Nav = () => {
    const [language, setLanguage] = useState()
    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
    <div className='nav'>
        <div className='title'><img src='/assets/bread.webp' alt='' className='moviebox-img'/>
         <h1>FAITH SHELF</h1>  </div>
          <button
                className="hamburger"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? "✕" : "☰"}
            </button>
         <div className={`nav-list ${menuOpen ? "active" : ""}`}>
            <Link to={home} onClick={() => setMenuOpen(false)}><p>HOME</p></Link>
           <Link to={bookcatalogue} onClick={() => setMenuOpen(false)}><p>BOOKS</p></Link>
            <Link to={categories} onClick={() => setMenuOpen(false)}><p>CATEGORIES</p></Link>
            <Link to={author} onClick={() => setMenuOpen(false)}><p>AUTHORS</p></Link>
            <Link to={about} onClick={() => setMenuOpen(false)}><p>ABOUT</p></Link>
         
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
