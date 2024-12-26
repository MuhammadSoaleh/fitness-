import React from 'react'

function Nav() {
  return (
    <div>
      <nav className="navbar bg-dark border-bottom border-body d-flex" data-bs-theme="dark">
      <div className="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a class="nav-link" href="/login">Sign In</a>
        </li>
        <li className="nav-item">
          <a class="nav-link" href="/register">Sign Up</a>
        </li> 
        {/* <li className="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> */}
        
      </ul>
      <form className="d-flex" role="search">
        <input class="form-control w-25" type="search" placeHolder="Search" aria-label="Search"/>
        <button class="btn btn-secondary mx-2" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>


    </div>
  )
}

export default Nav
