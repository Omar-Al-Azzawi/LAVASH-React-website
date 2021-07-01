import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { DiCode } from "react-icons/di";
import { Button } from "./Button";
import "./Navbar.css"

function Navbar() {
const[click, setClick] = useState(false);
const[button, setButton] = useState(true);

const handleClick = () =>setClick(!click)
const closeMobileMenu = ()=> setClick(false)

const showButton = () => {
    if(window.innerWidth <= 960){
        setButton(false);
    }else{
        setButton(true);
    }
};

window.addEventListener('resize', showButton);

    return (
        <div>
            <div className="navbar">
                <div className="navbar-container container">
                   <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                   <DiCode className="navbar-icon"/>
                      ROMAR
                   </Link>
                   <div className="menu-icon" onClick={handleClick}>
                      {click ? <FaTimes />: <FaBars />}
                   </div>
                   <ul className={click ? 'nav-menu active': 'nav-menu'}>
                       <li className="nav-item">
                           <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                             Home
                           </Link>
                       </li>
                       <li className="nav-item">
                           <Link to="/Services" className="nav-links" onClick={closeMobileMenu}>
                             Services
                           </Link>
                       </li>
                       <li className="nav-item">
                           <Link to="/Products" className="nav-links" onClick={closeMobileMenu}>
                             Products
                           </Link>
                       </li>
                       <li className="nav-btn">
                           {button ? (
                               <Link to="/sign-up" className="btn-link" onClick={closeMobileMenu}>
                                 <Button buttonStyle="btn--outline">SIGN UP</Button>
                               </Link>
                           ): (
                               <Link to="/sign-up" className="btn-link" onClick={closeMobileMenu}>
                                   <Button buttonStyle="btn--outline" buttonSize="btn-mobile">SIGN UP</Button>
                               </Link>
                           )}
                       </li>
                   </ul>
                </div>
            </div>      
        </div>
    )
}

export default Navbar
