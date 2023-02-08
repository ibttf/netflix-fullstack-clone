import React, {useState, useEffect} from 'react';
import user from "../styles/user.png"
import { Link, useParams } from "react-router-dom";
import Loading from './Loading';

const EditIndividualProfile = () => {
    const [isLoading,setIsLoading]=useState(false);
    const[name,setName]=useState("");
    const [previousName,setPreviousName]=useState("")
    const id=useParams().id.substring(1);

    useEffect(()=>{
        fetch(`/profiles/${id}`).then(r=>r.json()).then(profile=>setPreviousName(profile.tag))
    },[])


    function handleNameChange(e){
        setName(e.target.value);
    }
    function handleProfileUpdate(){
        setIsLoading(true);
        fetch("/update-profile", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                profileName: name,
                id:id,

            }),
            }).then((r) => {
            setIsLoading(false);
        
    })
}
    function handleProfileDelete(){
        setIsLoading(true);
        fetch(`/profiles/${id}`, {
            method: "DELETE",

            }).then((r) => {
            setIsLoading(false);
        
    })
    }
    
    if (isLoading){
        return <Loading></Loading>
    }
    return (
        <div className="add-profile">
            <h1>Edit Profile</h1>
            <div className="line-break"></div>
            <div className="add-profile-container">
                <img src={user}></img>
                <input type="text" placeholder={previousName} onChange={(e)=>handleNameChange(e)}></input>
            </div>
            <div className="add-profile-buttons">
                <Link to="/profile">
                    <button className="add-profile-continue" onClick={()=>handleProfileUpdate()}>Save</button>
                </Link>

                <Link to="/profile">
                    <button className="add-profile-cancel">Cancel</button>
                </Link>
                <Link to="/profile">
                    <button className="add-profile-delete" onClick={()=>handleProfileDelete()}>Delete</button>
                </Link>


            </div>
        </div>
    );
}

export default EditIndividualProfile;
