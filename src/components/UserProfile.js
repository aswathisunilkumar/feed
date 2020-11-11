import React, { useState } from 'react'
//import user from '../assets/user.jpg';
import cover from '../assets/cover.jpg';
import ChangeImg from './ChangeImg';
import '../App.css';

function UserProfile() {

    const[picture,setPicture]=useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png");
    
    const imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () =>{
          if(reader.readyState === 2){
            setPicture({picture: reader.result})
          }
        }
        reader.readAsDataURL(e.target.files[0]);
      };
        return (
            <div className="container">
                <div className="cover">
                    <div className="avatar">
                        <img src={cover} alt="coverpic"/>
                    </div>
                    <div className="name">
                        <h2>ADMIN ADMIN </h2>
                    </div>
                </div>
                <div className="photo">
                    <div className="avatar2">
                        <img src={picture} alt="" id="img" className="img" />
                    </div>
                <div className="image-upload">
					    <input type="file" accept="image/*" name="image-upload" 
					    id="input" onChange={imageHandler} />
          			    {/* <label className="image-upload" htmlFor="input">Choose your photo</label> */}
                    </div>
                </div>
            </div>
        )
    }
export default UserProfile;

