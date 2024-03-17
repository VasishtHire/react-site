import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
// import './css/style.css';
// import './css/animate.css';
// import './css/bootstrap.css';
// import './css/bootstrap-datepicker.css';
// import './css/aos.css';
// import './css/fancybox.min.css';
// import './css/flaticon.css';
// import './css/icomoon.css';
// import './css/jquery.timepicker.css';
// import './css/magnific-popup.css';
// import './css/open-iconic-bootstrap.min.css';
// import './css/owl.carousel.min.css';
// import './css/owl.theme.default.min.css';
// import './css/ionicons.min.css';

function Navbar() {
  return (
    <>
    <nav className="nav">
        <div className="container">
            <div className="logo">
                <a href="#">Your Logo</a>
            </div>
            <div id="mainListDiv" className="main_list">
                <ul className="navlinks">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <span className="navTrigger">
                <i></i>
                <i></i>
                <i></i>
            </span>
        </div>
    </nav>
    </>  
    )
}

export default Navbar
