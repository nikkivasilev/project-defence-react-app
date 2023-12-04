import { Link, useNavigate } from "react-router-dom";
import * as request from "../../lib/request";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../contexts/authContext";
import * as authService from '../../services/authService';


// Тази страница остава като Work in progress, защото Softuni Practice server-а не поддържа PUT заявки


export default function UserEdit() {
    const { email, username, userId} = useContext(AuthContext);
    const navigate = useNavigate();
    const [user, setUser] = useState({
        username: '',
        email: email,
        password: '',
        profilePictureUrl: '',
    });


    useEffect(() => {
        request.get('http://localhost:3030/users/me')   
        .then(result => {
                setUser(result);
            });
    }, []);


    const editUserSubmitHandler = async (e) => {
        e.preventDefault();

        const values = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await authService.edit(values);

            navigate('/user/details');
        } catch (err) {
            // Error notification
            console.log(err);
        }

    };


    const onChange = (e) => {
        setUser(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <div className="container-inline">
        <section id="welcomePage">

            <div className="music-img">
                <img src="/images/contrast.png" alt="music-icon"/>
            </div>
        </section>
        <section id="registerPage">
            <fieldset>
                <legend>REGISTER</legend>
                <form onSubmit={editUserSubmitHandler}>
                <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        onChange={onChange}
                        value={user.username}
                    />

                    <label htmlFor="pass">Password:</label>
                    <input
                        type="text"
                        name="password"
                        id="register-password"
                        onChange={onChange}
                        value={user.password}
                    />

                    <label htmlFor="con-pass">Profile Picture Url:</label>
                    <input
                        type="text"
                        name="profilePictureUrl"
                        id="confirm-password"
                        onChange={onChange}
                        value={user.profilePictureUrl}
                    />
                    {/* {formValid && <p style={{color: 'red'}}>Empty fields are not allowed!</p>} */}
                    <button type="submit" className="register">Enter</button>
                    <h3>Have an account?</h3>
                <Link className="register" to="/login">Click here!</Link>

                </form>
            </fieldset>

        </section>
    </div>
    )
    
}