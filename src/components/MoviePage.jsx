function MoviePage(props) {
        return (
            <div>
                <h1>MoviePage</h1>
                <h1>{props.arr.Title}</h1>
                <img src={props.arr.Poster} alt="" className="images"/>
                <h2> year : {props.arr.Year}</h2>
                <h2>type : {props.arr.Type}</h2>
            </div>
        )    
}
export default MoviePage