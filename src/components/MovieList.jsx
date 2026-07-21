import React from 'react';
import MovieCard from './MovieCard';
import movies from '../data/movies';

const MovieList = ({watchList, onAddMovie, onRemoveMovie}) => {
  return (
    <>
    <div className='movie-section'>
    <h2 className='movie-section-h2'>ONLINE STREAMING</h2>
     <div className='movie-list'>
      {movies.map ((movie) => {
          const id = movie.id
        return(
        <MovieCard key={id} movie={movie}
        onAddMovie={onAddMovie} isAdded={watchList.some(item => item.id === movie.id)}/>
    )}
        )}
    </div>
      </div>
    </>
   
  );
}

export default MovieList;
