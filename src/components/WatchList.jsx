import React from 'react';
import movies from '../data/movies';

const WatchList = ({watchList, onRemoveMovie}) => {
    
  return (
    <div className='watch-list'>
      { watchList.length === 0? 
      (<div className="empty-watchlist">
        <h2>WatchList(0)</h2>
        <p>Your watch list is empty</p>
        <p>Add movies from the collection to get started.</p>
        </div>)
        :
        (<div>
            <h2>WatchList({watchList.length})</h2>
            <div className='added-to-watchlist'>
                {watchList.map((movie, id) => {
                    return(
                     <div key={id} className='movie-item'>
        <img src={movie.poster} alt=''/>
        <div className='watchlist-text-content'>
            <h3>{movie.title}</h3>
            <span className='movie-item-span'>{movie.genre}</span>
            <span className='movie-item-span'> { movie.year}</span>
            <p>Rating: {movie.rating}</p>
            <span>{movie.durarion}</span>
        </div>
         <button className='remove-from-watchlist' onClick={() => onRemoveMovie(id)}>Remove from watchlist</button>
    </div>  
    
                    )
                })}
                
            </div>
            
        </div>)}
    </div>
  );
}

export default WatchList;
