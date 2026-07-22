import React from 'react';
import category from '../data/category';

const CategoryCard = ({item}) => {
  return (
    <div className='category-card'>
        <h3>{item.name}</h3>
        <div>
            <p className="tagline">{item.tagline}</p>
            <p>{item.description}</p>
        </div>
        </div>
  );
}

export default CategoryCard;
