import React, {useState, useEffect} from 'react';
import { Link, useHistory } from "react-router-dom";
import "../styles/Profile.css"
import "../styles/EditProfile.css"
import userImg from "../styles/user.png"
import add from "../styles/add.png"

import Loading from './Loading';
const EditProfile = () => {
    const history=useHistory();
    const [profiles, setProfiles]=useState([]);
    const[isLoading,setIsLoading]=useState(false);

    //function to get all the profiles for a given user
     useEffect(() => {
            setIsLoading(true);
            fetch("/show-profiles")
            .then((data) => {
                setIsLoading(false);
                data.json().then((userProfiles)=>setProfiles(userProfiles))
                
            });
        }, []);

    //function to select a profile and send you to the browse of that particular profile

    if (!isLoading){
        return (
                <div className="profile">
                    <h1>Manage Profiles</h1>
                    <div className="user-profiles">
                        {profiles.map((profile)=>{
                        return (

                        <Link to={`/my-profile/:${profile.id}`} className="link-to-profile">
                            <div className="user-profile">
                            <img src={userImg}></img>
                            <h1>{profile.tag}</h1>
                            </div>
                        </Link>
 
                        )})}
                        <Link to ="/add-profile"  className="profile-link">
                            <div className="user-profile">
                                <img src={add} className="add-img"></img>
                                
                                <h1>Add Profile</h1>
                            </div>
                        </Link>

                    </div>
                    <div className="done-button-container">
                        <Link to ="/profile">
                            <button className="done-button">Done</button>
                        </Link>

                    </div>
                </div>
        );
    } return <Loading></Loading>
    
}

export default EditProfile;
