import { useContext, useEffect } from "react";
import AuthContext from "../../contexts/authContext";
import * as request from "../../lib/request";
export default function UserDetails() {
    const { email, username, profilePictureUrl, userId} = useContext(AuthContext);

    return (
    <div className="wrapper">
        {profilePictureUrl ?
        <div className="profilePage">
                <img src={profilePictureUrl}
                     alt="Profile Image"/>
        </div>
        :
        <div className="profilePage">
                <img src="/images/blank-profile-picture.jpeg"
                     alt="Blank profile Image"/>
        </div>
        }
        <div className="profileText">
            {username && 
            <h1>Username: {username}</h1>
            }
            
            <h1>Email: {email}</h1>
        </div>
    </div>
    )
}