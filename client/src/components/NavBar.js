import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../styles/logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBell,
  faUser,
  faAngleDown,
  faPencil, faSmile, faX
} from "@fortawesome/free-solid-svg-icons";
import user from "../styles/user.png"


import "../styles/NavBar.css";

const Navbar = ({user,setUser}) => {
  //hook for changing opacity on scroll
  const [sticky, setSticky] = useState(false);
  const history =useHistory();
  //hooks for changing 
  const [isHome,setIsHome]=useState(false);
  const [isTVShows,setIsTVShows]=useState(false);
  const [isMovies,setIsMovies]=useState(false);
  const [isNewPopular,setIsNewPopular]=useState(false);
  const [isMyList,setIsMyList]=useState(false);
  const[profiles,setProfiles]=useState([]);
  const [currentProfile,setCurrentProfile]=useState([]);
  
  const[isHovering,setIsHovering]=useState(false);

  //function to make the navbar black on scroll
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
  
    //fetch to get the current profile number
    fetch(`/get-current-profile`).then(data=>data.json()).then(profileId=>{
              //fetch to set the frontend current profile to the current profile without said number
              fetch(`/profiles/${profileId}`).then(data=>data.json()).then(profile=>setCurrentProfile([profile]))
              //fetch to set all other profiles besides the currently selected one
              fetch("/show-profiles-except-current").then(data=>data.json()).then(profiles=> setProfiles([...profiles]))
    })



    return () => window.removeEventListener("scroll", handleScroll);
  },[]);
  //end


  //function to change the way an item looks when clicked
  function handleNavBarClick(e) {
    for (const child of e.target.parentElement.childNodes) {
      child.classList.remove("active");
    }
    e.target.classList.add("active");
  }
 //end


    function handleProfileChange(id){
      fetch("/select-profile", {
                  method: "PATCH",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                      profileId: id,
                  })
              }).then((r)=>window.location.reload());
    }


  function handleLogoutClick() {
      fetch("/logout", { method: "DELETE" }).then((r) => {
        if (r.ok) {
          setUser(null);
          history.push("/");
        }
      });
    }

  return (
    <>
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

          <div className="navbar-button dropdown" onMouseOver={()=>setIsHovering(true)} >
            <div className="dropbtn">
              <FontAwesomeIcon
                icon={faUser}
                className="navbar-icon"
              />
              <FontAwesomeIcon
                icon={faAngleDown}
                className="navbar-icon more-info"
              />
            </div>
            

          </div>


        </div>
      </div>

    </nav>
      <div className={`dropdown-content ${isHovering ? "hover" : ""}`} onMouseOver={()=>setIsHovering(true)} onMouseLeave={()=>setIsHovering(false)}>
                {currentProfile.map(profile=>{ return(
                  <div className="dropdown-content-item"><p>Hi, {profile.tag}</p></div>
                )})}
                  {profiles.map(profile=>{ return (
                  <div className="dropdown-content-item" onClick={()=>handleProfileChange(profile.id)}>
                    <FontAwesomeIcon icon={faUser}> </FontAwesomeIcon>
                    <p>{profile.tag}</p>
                  </div>)})}
                
                  <Link to="/edit-profile" className="profile-dropdown-link">
                      <div className="dropdown-content-item">
                        <FontAwesomeIcon icon={faPencil}> </FontAwesomeIcon><p>Manage Profiles</p></div>
                  </Link>
                  <Link to="/profile" className="profile-dropdown-link">
                      <div className="dropdown-content-item">  <FontAwesomeIcon icon={faSmile}> </FontAwesomeIcon><p>Transfer Profile</p></div>
                  </Link>
                  <div className="dropdown-content-item" onClick={handleLogoutClick}> <FontAwesomeIcon
                icon={faX}
                className="navbar-icon"
              /><p>Sign Out</p></div>
                  
      </div>

    </>
  );
};

export default Navbar;
