import React from 'react'
import {Link} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'

const NavBar = () => {
  return (
    <div className='header'>
    <header className="navbar navbar-expand-md navbar-light bg-light px-3">
        <span className="navbar-text">FireCommerce</span>
        <button type="button" className="navbar-toggler"  
        data-bs-toggle="collapse"
        data-bs-target="#navbar-content"
        >
            <span className="navbar-toggler-icon" ><FaBars size={25} color='white' /></span>
        </button>
        <nav className="collapse navbar-collapse navbar" id="navbar-content">
            <ul className="navbar-nav ms-auto" >
              <li className="nav-item"><Link to="/" className="nav-link">User</Link></li>
              <li className="nav-item"><Link to="blog" className="nav-link">Ordres</Link></li>
              <li className="nav-item"><Link to="blog" className="nav-link">Logout</Link></li>
              <li className="nav-item"><Link to="blog" className="nav-link">Cart</Link></li>
            </ul>
        </nav>
    </header>
    </div>
    
  )
}

export default NavBar

/*<nav aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><Link to="/">Acceuil</Link></li>
    <li className="breadcrumb-item"><Link to="blog">Blog</Link></li>
    
  </ol>
</nav> */