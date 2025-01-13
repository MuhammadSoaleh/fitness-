import React from 'react'

function Nav() {
  return (
    <div>
      <nav className="navbar bg-dark border-bottom border-body navbar navbar-expand-lg" data-bs-theme="dark">
  <div className="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a class="nav-link" href="/login">SignIn</a>
        </li>
        <li className="nav-item">
          <a class="nav-link" href="/register">SignUp</a>
        </li>
        <li className="nav-item">
          <a class="nav-link" href="/contact">Contact</a>
        </li>
        <li className="nav-item">
          <a class="nav-link" href="/nutrition">Nutrition</a>
        </li>
        <li className="nav-item">
          <a class="nav-link" href="/workout">Workout</a>
        </li>
        <li className="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul className="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <div class="container-fluid">
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeHolder="Search" aria-label="Search"/>
      <button className="btn btn-secondary" type="submit">Search</button>
    </form>
  </div>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Nav
