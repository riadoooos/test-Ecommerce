import React from 'react'
import {Link} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'

const Header = () => {
  return (
    <div className='header'>
       <header className="navbar navbar-expand-md navbar-light bg-light px-3 shadow bg-white">
        <Link  style={{textDecoration: "none"}} to="/"><span className="navbar-text">FireCommerce</span></Link>
        <button type="button" className="navbar-toggler"  
        data-bs-toggle="collapse"
        data-bs-target="#navbar-content"
        >
            <span className="navbar-toggler-icon" ><FaBars size={25} color='white' /></span>
        </button>
        <nav className="collapse navbar-collapse navbar" id="navbar-content">
            <ul className="navbar-nav ms-auto" >
              <li className="nav-item"><Link to="blog" className="nav-link">LogIn</Link></li>
              <li className="nav-item"><Link to="blog" className="nav-link">Cart</Link></li>
            </ul>
        </nav>
    </header>
    </div>
  )
}

export default Header