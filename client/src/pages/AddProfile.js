import React, {useState} from 'react';
import user from "../styles/user.png"
import { Link, useHistory } from "react-router-dom";
import Loading from './Loading';
import "../styles/AddProfile.css"
const AddProfile = () => {
    const [isLoading,setIsLoading]=useState(false);
    const[name,setName]=useState("");
    function handleNameChange(e){
        setName(e.target.value);
    }
    function handleProfileCreation(){
        console.log(name);
        setIsLoading(true);
        fetch("/add-profile", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                profileName: name,

            }),
            }).then((r) => {
            setIsLoading(false);
        
    })
}
    
    if (isLoading){
        return <Loading></Loading>
    }
    return (
        <div className="add-profile">
            <h1>Add Profile</h1>
            <h2>Add a profile for another person watching Netflix</h2>
            <div className="line-break"></div>
            <div className="add-profile-container">
                <img src={user}></img>
                <input type="text" placeholder="Name" onChange={(e)=>handleNameChange(e)}></input>
            </div>
            <div className="add-profile-buttons">
                <Link to="/profile">
                    <button className="add-profile-continue" onClick={()=>handleProfileCreation()}>Continue</button>
                </Link>

                <Link to="/profile">
                    <button className="add-profile-cancel">Cancel</button>
                </Link>

            </div>
        </div>
    );
}

export default AddProfile;
