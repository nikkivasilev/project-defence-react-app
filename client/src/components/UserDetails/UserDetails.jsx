import { useContext } from "react";
import AuthContext from "../../contexts/authContext";

export default function UserDetails() {
    const { email, username} = useContext(AuthContext);

    return (
        <div className="wrapper">
        <div className="profileText">
            {username !== email && 
            <h1>Username: {username}</h1>
            }
            {username === email &&
            <h1>Username: No username</h1>
            }
            <h1>Email: {email}</h1>
        </div>
        <div className="actionBtn">
            <a href="{% url 'edit user' pk=request.user.pk %}" className="remove">Edit</a>
            {/* <a href="{% url 'liked products'%}" className="remove">My products</a> */}
        </div>
        <div className="actionBtnDelete">
            <a href="{% url 'delete user' pk=request.user.pk %}">Delete</a>
        </div>
    </div>
    )
}