import React from 'react';
import movies from '../data/movies';


const MovieCard = ({ movie, onAddMovie, isAdded }) => {
    function AddMovie(){onAddMovie(movie)}

  console.log(movie.poster);
  return (
    <div className='movie-card'>
        <img src={movie.poster} alt=''/>
        <div>
            <h4>{movie.title}</h4>
            <span>{movie.genre}</span>
            <span>{movie.year}</span>
            <p>Rating: {movie.rating}</p>
            <p>Duration: {movie.duration}</p>
        </div>
         <button onClick={AddMovie} disabled={isAdded}>{isAdded ? "Added ✔" : "Add to watchlist"}</button>
    </div>
  );
}

export default MovieCard;
