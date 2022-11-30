import './App.css';
import React  from 'react';
 import { useState } from 'react'; 
import MovieList from './components/MovieList';
import { useEffect } from 'react';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import AddFavourites from './components/AddFavourites';
import RemoveFavourites from './components/RemoveFavourites';

function App() {

  const [movies,setMovies] = useState([]);
  const [searchValue,setSearchValue] = useState('');
  const [favourites,setFavourites] = useState([])

  const getMoviesRequset = async()=>{
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=cfaf86ed`;
    const response = await fetch(url);
    const responsJson = await response.json();
    if (responsJson.Search) {
      setMovies(responsJson.Search)
    }
    
  }

  useEffect(()=>{
    getMoviesRequset(searchValue)
  },[searchValue])

  useEffect(() => {
		const movieFavourites = JSON.parse(
			localStorage.getItem('react-movie-app-favourites')
		);

		if (movieFavourites) {
			setFavourites(movieFavourites);
		}
	}, []);
 
  const saveToLocalStorage = (items) => {
		localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
	};


  const AddtoFavouritesMovie = (movie) =>{
    const newFavouritesList = [...favourites,movie];
    setFavourites(newFavouritesList)
    saveToLocalStorage(newFavouritesList);
  }
  const removeFavouriteMovie = (movie) =>{
    const newFavouritesList = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    )
    setFavourites(newFavouritesList);
    saveToLocalStorage(newFavouritesList);
  }

  return (
      <div className='container-fluid movie-app'>

        <div className='row d-flex align-items-center'>
          <MovieListHeading heading={"movies"}/>
          <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
        </div>

        <div className='row'>
          <MovieList movies={movies} handleFavouritesClick={AddtoFavouritesMovie}  favouriteComponent={AddFavourites}  />
        </div>

        <div className='row d-flex align-items-center'>
          <MovieListHeading heading={"favourites"}/>
        </div>

        <div className='row'>
          <MovieList movies={favourites} handleFavouritesClick={removeFavouriteMovie}  favouriteComponent={RemoveFavourites}  />
        </div>
       
      </div>
  );
}

export default App;



