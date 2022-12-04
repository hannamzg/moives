import { NavLink } from "react-router-dom";
function SearchBox(props) {

    
    return (
        <div className="col col-sm-4 mt-3" style={{display:"flex",justifyContent:"end",flexDirection:"column",overflow:"hidden",position:"relative"}} > 
            <div style={{position:"relative"}}>
                <input type="text" className='form-control' value={props.searchValue} onChange={(event) => props.setSearchValue(event.target.value) } placeholder='Type to search...' style={{width:"100%"}}/>
                <i className="bi bi-x-circle" style={{position:"absolute",color:"black",zIndex:"12",top:"7px",right:'10px',cursor:"pointer"}} onClick={()=>props.setSearchValue("")}></i>
            </div>

            <ul style={{display:"flex",justifyContent:"start",flexDirection:"column",width:"100%"}}>
                {props.movies.map((movie,index)=>( props.searchValue && <NavLink to="/MoviePage" key={index}> <li className="dropdown-item" key={index} style={{color:"white"}} onClick={()=> props.AddsetMoviePage(movie)}>{movie.Title}</li></NavLink>))}
            </ul>

        </div>
    )    
}
export default SearchBox;