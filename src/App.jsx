import React from 'react';
import Hero from './components/Hero';
import './App.css'
import {home, bookcatalogue, categories, author, about} from './data/routes'
import { Route, Routes } from 'react-router-dom';
import BookCatalogue from './components/BookCatalogue';
import Categories from './components/Categories';
import Author from './components/Author';
import About from './components/About';


const App = () => {
  return (
    <div>
      <Routes>
        <Route path={home} element={<Hero/>}/>
        <Route path={bookcatalogue} element={<BookCatalogue/>}/>
        <Route path={categories} element={<Categories/>}/>
        <Route path={author} element={<Author/>}/>
        <Route path={about} element={<About/>}/>
       </Routes>
    </div>
  );
}

export default App;
