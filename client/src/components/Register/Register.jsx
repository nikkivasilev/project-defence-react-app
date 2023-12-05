import { useContext } from "react";

import AuthContext from "../../contexts/authContext";
import useForm from "../../hooks/useForm";
import { Link } from "react-router-dom";
import Login from "../Login/Login";

const RegisterFormKeys = {
    Email: 'email',
    Username: 'username',
    ProfilePictureUrl: 'profilePictureUrl',
    Password: 'password',
    ConfirmPassword: 'confirm-password',
};

export default function Register() {
    const { registerSubmitHandler , errorMessages} = useContext(AuthContext);
    const { values, onChange, onSubmit, formValid } = useForm(registerSubmitHandler, {
        [RegisterFormKeys.Email]: '',
        [RegisterFormKeys.Username]: '',
        [RegisterFormKeys.ProfilePictureUrl]: '',
        [RegisterFormKeys.Password]: '',

    });

    return(
        <div className="container-inline">
        <section id="welcomePage">

            <div className="music-img">
                <img src="/images/contrast.png" alt="music-icon"/>
            </div>
        </section>
        <section id="registerPage">
            <fieldset>
                <legend>REGISTER</legend>
                <form onSubmit={onSubmit}>
                <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="n.vasilev105@gmail.com"
                        onChange={onChange}
                        values={values[RegisterFormKeys.Email]}
                    />
                <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="nikki"
                        onChange={onChange}
                        values={values[RegisterFormKeys.Username]}
                    />
                <label htmlFor="profilePictureUrl">Profile Picture Url:</label>
                    <input
                        type="text"
                        id="profilePictureUrl"
                        name="profilePictureUrl"
                        onChange={onChange}
                        values={values[RegisterFormKeys.ProfilePictureUrl]}
                    />

                    <label htmlFor="pass">Password:</label>
                    <input
                        type="password"
                        name="password"
                        id="register-password"
                        onChange={onChange}
                        values={values[RegisterFormKeys.Password]}
                    />

                    {!formValid && <p style={{color: 'red'}}>Empty fields are not allowed!</p>}
                    {errorMessages.register && <p style={{color: 'red'}}>{errorMessages.register}</p>}
                    <button type="submit" className="register">Enter</button>
                    <h3>Have an account?</h3>
                <Link className="register" to="/login">Click here!</Link>

                </form>
            </fieldset>

        </section>
    </div>


    )
}