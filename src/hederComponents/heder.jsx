import { Link, NavLink } from "react-router-dom";
function Heder() {
    return (
    <nav className="navbar navbar-expand-lg " style={{backgroundColor:"#212529"}}>
        <div className="container-fluid">
        <Link to="main" className="navbar-brand" style={{color:"white"}}>
             <i className="bi bi-film me-2"></i>movies
        </Link>
            
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-sm-0">
                        <li className="nav-item" style={{color:"white"}}>
                        <NavLink to="main" style={{color:"white"}}  className={({ isActive }) =>
                            isActive ? "nav-link activeStyle" :"nav-link"
                            }>
                            main
                        </NavLink>
                        </li>
                        <li className="nav-item" style={{color:"white"}}>
                         <NavLink  to="favourites" style={{color:"white"}} className={({ isActive }) =>
                            isActive ? "nav-link activeStyle" :"nav-link"
                            }>
                            favourites
                        </NavLink> 
                        </li>
                        <li className="nav-item" style={{color:"white"}}>
                        <NavLink  to="MoviePage" style={{color:"white"}} className={({ isActive }) =>
                            isActive ? "nav-link activeStyle" :"nav-link"
                            }>
                            MoviePage
                        </NavLink>
                        </li>
                </ul>
                {/* <form className="d-flex  ms-auto  " role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                </form> */}
            </div>
        </div>
    </nav>
    )
}

export default Heder;
