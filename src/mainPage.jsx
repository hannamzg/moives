import './App.css';
import React  from 'react';
 import { useState } from 'react'; 
/*  import MovieList from './components/MovieList';
 */import RemoveFavourites from './components/RemoveFavourites'; 
import Favourites from './components/Favourites';
import { useEffect } from 'react';
/* import SearchBox from './components/SearchBox';
 */import AddFavourites from './components/AddFavourites';
 import { Route, Routes } from "react-router-dom";
import Movies from './components/movies';
import MoviePage from './components/MoviePage';
 
function MainPage() {
    const [movies,setMovies] = useState([]);
    const [searchValue,setSearchValue] = useState('');
    const [favourites,setFavourites] = useState([]);
    const [MooviePage,setMoviePage]=useState([]);

  
    const getMoviesRequset = async()=>{
      const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=cfaf86ed`;
      const response = await fetch(url);
      const responsJson = await response.json();
      if (responsJson.Search) {
        setMovies(responsJson.Search)
      }
      
    }
      const AddsetMoviePage = (movie) =>{
        setMoviePage(movie)
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
        <div className='container-fluid movie-app flex-fill container'>
        <Routes>  
            <Route path="main" element={<Movies searchValue={searchValue} setSearchValue={setSearchValue} movies={movies} AddtoFavouritesMovie={AddtoFavouritesMovie} AddFavourites={AddFavourites} MooviePage={MooviePage} AddsetMoviePage={AddsetMoviePage}/> } />
            <Route path="favourites" element={<Favourites favourites={favourites} removeFavouriteMovie={removeFavouriteMovie} RemoveFavourites={RemoveFavourites}/>} />
            <Route path="MoviePage"  element={<MoviePage arr={MooviePage}/>}/> 
        </Routes>

        </div>
    );
  }
  
export default MainPage;