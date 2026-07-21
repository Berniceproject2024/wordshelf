import React, { useState } from 'react';
import MovieList from './MovieList';
import WatchList from './WatchList';
import Main from './main';

const Hero = () => {
  const [watchList, setWatchList] = useState([])

  function addMovie(movie){
    setWatchList(prevWatchList => {
    const existingItem = watchList.some 
    (item => item.id === movie.id)

    if(existingItem) {
      return prevWatchList;
    }
    return [...prevWatchList, movie];
}
)
    }
  
  const removeMovie = (deleteIndex) =>{
    setWatchList(prevWatchList => prevWatchList.filter((movie, index) => index !== deleteIndex))
  }
  return (
    <>
    <Main/>
    <div className='hero-section'>
      <MovieList watchList={watchList} onAddMovie={addMovie} onRemoveMovie={removeMovie}/>
      <WatchList watchList={watchList} onAddMovie={addMovie} onRemoveMovie={removeMovie}/>
    </div>
    </>
  );
}

export default Hero;
