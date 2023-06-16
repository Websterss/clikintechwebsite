import React from 'react';
import "./Navbar.css";
import navbarimage from "../HomeImage/clikintechnavbarlogo.png";
import MenuIcon from '@mui/icons-material/Menu';


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <a className="navbar-brand" href="/"><img src={navbarimage} className='navbarimage' alt="" /></a>
    <div className='navbar-upper ms-auto'>
    <button className="navbar-upper-btn"  type="button" aria-expanded="false">Book a Demo</button>
    </div>   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-tog"> <MenuIcon className='menu'/> </span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link"  href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Service</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Career</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Blog</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/AboutUs">About us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Contact us</a>
        </li>
      </ul>
      <form className="d-flex ms-auto">
        <button className="navbar-btn">Book a Demo</button>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Navbar