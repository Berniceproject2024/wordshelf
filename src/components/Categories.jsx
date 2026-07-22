import React from 'react';
import category from '../data/category';
import Nav from './Nav';
import CategoryCard from './CategoryCard';
import Footer from './Footer';

const Categories = () => {
  return (
    <div className='page-container'>
       <Nav/>
        <div className='category-section'>
    <h2 className="category-section-h2">
    Browse Categories
</h2>
<p className="category-intro">
    Discover Christian books organized by topic to help
    you grow in faith, prayer, and biblical understanding.
</p>
     <div className='category-list'>
      {category.map ((item) => {
          const id = item.id
        return(
        <CategoryCard key={id} item={item}/>
    )}
        )}
    </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Categories;
