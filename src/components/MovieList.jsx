import { NavLink } from "react-router-dom";

function MovieList(props) {
    const FavouriteComponent = props.favouriteComponent;
    
    return(
        <> 
         {props.movies.map((movie,index)=>(
           
                <div className='image-container d-flex justify-content-start m-3' onClick={()=> props.AddsetMoviePage(movie)} style={{alignItems:"center"}} key={index} >
                    <div className="d-flex " style={{flexDirection:"column" , alignItems:"center"}}>
                        <NavLink to="/MoviePage">
                        <div> 
                             <h5 className="m-3 " id="MoviesTitels">{movie.Title}</h5>
                        </div>
                             <img src={movie.Poster} alt="movie"  className="images" />
                        </NavLink> 
                    </div>
            
                    <div onClick={()=>props.handleFavouritesClick(movie)} className="overlay d-flex align-items-center justify-content-center">
                        <FavouriteComponent/>
                    </div>

                </div>            
        ))}
        </>
       
    )

}

export default MovieList;