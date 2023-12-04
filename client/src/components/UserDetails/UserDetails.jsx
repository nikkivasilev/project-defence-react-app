import { useContext } from "react";
import AuthContext from "../../contexts/authContext";

export default function UserDetails() {
    const { email, username, userId} = useContext(AuthContext);

    return (
    <div className="wrapper">
        <div className="profileText">
            {username && 
            <h1>Username: {username}</h1>
            }
            
            <h1>Email: {email}</h1>
        </div>
    </div>
    )
}