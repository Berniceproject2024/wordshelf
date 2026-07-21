import React from 'react';
import { useState } from 'react';

const Nav = () => {
    const [language, setLanguage] = useState()

  return (
    <>
    <div className='nav'>
        <div className='title'><img src='src/assets/moviebox.webp' alt='' className='moviebox-img'/>
         <h1>MOVIE BOX</h1>  </div>
         <div className='nav-list'>
            <p>HOME</p>
            <p>MOVIE</p>
            <p>TV SHOW</p>
            <p>WEB SERIES</p>
            <p>PREMIUM</p>
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
