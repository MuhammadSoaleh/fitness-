import React from 'react';
import  {useAuth}  from './user/Auth';
import logo from "../src/pages/images/WhatsApp_Image_2025-01-07_at_9.09.26_PM-removebg-preview.png";
function Nav() {
  const { isLoggedIn } = useAuth();
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-body sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/"> <img src={logo} style={{width:'50px',height:'40px'}}></img> Fitness</a>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNavDropdown" 
            aria-controls="navbarNavDropdown" 
            aria-expanded="false" 
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/nutrition">Nutrition</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/workout">Workout</a>
              </li>
              {isLoggedIn ? (
                <li className="nav-item">
                  <a className="nav-link" href="/logout">Logout</a>
                </li>
              ) : (
                <>
                  <li className="nav-item">
                    <a className="nav-link" href="/login">SignIn</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/register">SignUp</a>
                  </li>
                </>
              )}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown link
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
            </ul>
          </div>
          {/* Search Form */}
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-secondary" type="submit">Search</button>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
