import React, {useState, useEffect} from 'react';
import { Link, useHistory } from "react-router-dom";
import "../styles/Profile.css"
import userImg from "../styles/user.png"
import add from "../styles/add.png"

import Loading from './Loading';
const Profile = () => {
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
        function selectProfile(profileId){
            fetch("/select-profile", {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    profileId: profileId,
                })
            }).then((r)=>history.push("/browse"));
        }

    if (!isLoading){
        return (
                <div className="profile">
                    <h1>Who's Watching?</h1>
                    <div className="user-profiles">
                        {profiles.map((profile)=>{
                        console.log(profile.id);
                        return (
                        <div className="user-profile" onClick={()=>selectProfile(profile.id)}>
                            <img src={userImg}></img>
                            <h1>{profile.tag}</h1>
                            </div>
                        )})}
                        <Link to ="/add-profile"  className="profile-link">
                            <div className="user-profile">
                                <img src={add} className="add-img"></img>
                                
                                <h1>Add Profile</h1>
                            </div>
                        </Link>

                    </div>
                    <div className="manage-profiles-button-container">
                        <Link to ="/edit-profile">
                            <button className="manage-profiles-button">Manage Profiles</button>
                        </Link>

                    </div>
                </div>
        );
    } return <Loading></Loading>
    
}

export default Profile;
