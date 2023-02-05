import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../styles/logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUser,
  faBell,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";

import "../styles/NavBar.css";
const Navbar = () => {
  //hook for changing opacity on scroll
  const [sticky, setSticky] = useState(false);

  //hooks for changing 
  const [isHome,setIsHome]=useState(false);
  const [isTVShows,setIsTVShows]=useState(false);
  const [isMovies,setIsMovies]=useState(false);
  const [isNewPopular,setIsNewPopular]=useState(false);
  const [isMyList,setIsMyList]=useState(false);





  //function to make the navbar black on scroll
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  //end


  //function to change the way an item looks when clicked
  function handleNavBarClick(e) {
    for (const child of e.target.parentElement.childNodes) {
      child.classList.remove("active");
    }
    e.target.classList.add("active");
  }
 //end




  return (
    <nav className={`${sticky ? "sticky" : ""}`}>
      <div id="Navbar">
        <Link to="/browse" className="navbar-button">
            <img
              className="logo"
              src={logo}
            ></img>
        </Link>
        <div className="navbar-left" onClick={handleNavBarClick}>


          <Link to="/browse" className={`navbar-button ${isHome ? "active" : ""}` } onClick={()=>setIsHome(!isHome)}>
            Home
          </Link>
          <Link to="/browse" className={`navbar-button ${isTVShows? "active" : ""}` }  onClick={()=>setIsTVShows(!isTVShows)}>
            TV Shows
          </Link>
          <Link to="/browse" className={`navbar-button ${isMovies ? "active" : ""}` } onClick={()=>setIsMovies(!isMovies)}>
            Movies
          </Link>
          <Link to="/browse" className={`navbar-button ${isNewPopular ? "active" : ""}` } onClick={()=>setIsNewPopular(!isNewPopular)}>
            New & Popular
          </Link>
          <Link to="/mylist" className={`navbar-button ${isMyList ? "active" : ""}` } onClick={()=>setIsMyList(!isMyList)}>
            My List
          </Link>
        </div>
        <div className="navbar-right">
          <Link to="/search" className="navbar-button">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="navbar-icon" />
          </Link>
          <div className="navbar-button">
            <FontAwesomeIcon icon={faBell} className="navbar-icon" />
          </div>
          <div className="navbar-button">
            <FontAwesomeIcon icon={faUser} className="navbar-icon" /> 
            <FontAwesomeIcon
              icon={faAngleDown}
              className="navbar-icon more-info"
            />
          </div>


        </div>
      </div>
    </nav>
  );
};

export default Navbar;
