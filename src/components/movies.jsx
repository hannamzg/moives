import React  from 'react';
import MovieList from './MovieList';
import MovieListHeading from './MovieListHeading';
import SearchBox from './SearchBox';

function Movies(props) {
  return<>
    <div className='row d-flex' >
            <MovieListHeading heading={"movies"}/>
            <SearchBox movies={props.movies}  searchValue={props.searchValue} setSearchValue={props.setSearchValue}  AddsetMoviePage={props.AddsetMoviePage} setMoviePage={props.setMoviePage}/>
    </div>
  
    <div className='row'>
            <MovieList 
            setFavourites={props.setFavourites} 
            movies={props.movies} 
            searchValue={props.searchValue} 

            handleFavouritesClick={props.AddtoFavouritesMovie} 
            favouriteComponent={props.AddFavourites} 

            AddsetMoviePage={props.AddsetMoviePage} 
            setMoviePage={props.setMoviePage}

            />
    </div>
 </>
}

export default Movies;