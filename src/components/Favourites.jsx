import MovieListHeading from './MovieListHeading';
import MovieList from './MovieList';


function Favourites(props){
    return(
        <>
        <div className='row d-flex align-items-center'>
            <MovieListHeading heading={"favourites"}/>
          </div>
  
          <div className='row'>
            <MovieList movies={props.favourites} handleFavouritesClick={props.removeFavouriteMovie}  favouriteComponent={props.RemoveFavourites}  />
          </div>
        </>
        
    )
}
export default Favourites;