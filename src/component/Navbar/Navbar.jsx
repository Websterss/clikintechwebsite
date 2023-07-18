import React from 'react';
import "./Navbar.css";
import navbarimage from "../../res/HomeImages/logo.png";
import MenuIcon from '@mui/icons-material/Menu';
import { useHistory } from "react-router-dom";

function Navbar() {

  const history = useHistory();
  
    const navigate = () => {
        history.push("/ContactUs")
    }
   

  return (
    <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <a className="navbar-brand" href="/"><img src={navbarimage} className='navbarimage' alt="" /></a>
    <div className='navbar-upper ms-auto'>
    <button className="navbar-upper-btn"  type="button"  aria-expanded="false">Book a Demo</button>
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
          <a className="nav-link" href="/Services">Service</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Career">Career</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Blog">Blog</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/AboutUs">About us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/ContactUs">Contact us</a>
        </li>
      </ul>
      <form className="d-flex ms-auto">
        <button className="navbar-btn"  onClick={navigate}>Book a Demo</button>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Navbar