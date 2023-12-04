import { useContext } from "react";
import useForm from "../../hooks/useForm";
import AuthContext from "../../contexts/authContext";
import { Link } from "react-router-dom";

const LoginFormKeys = {
    Email: 'email',
    Password: 'password',
};


export default function Login() {
    const { loginSubmitHandler } = useContext(AuthContext);
    const { values, onChange, onSubmit, formValid } = useForm(loginSubmitHandler, {
        [LoginFormKeys.Email]: '',
        [LoginFormKeys.Password]: '',
    });



    return (
        <div className="container-inline">
        <section id="welcomePage">
            <div id="welcome-message">
            </div>
            <div className="music-img">
                <img src="/images/contrast.png" alt="music-icon"/>
            </div>
        </section>
        <section id="registerPage">
            <fieldset>
                <legend>Login</legend>
                <form onSubmit={onSubmit}>
                <div className="container">
                    <div className="brand-logo"></div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name={LoginFormKeys.Email}
                        placeholder="Sokka@gmail.com"
                        onChange={onChange}
                        value={values[LoginFormKeys.Email]}
                    />

                    <label htmlFor="login-pass">Password:</label>
                    <input
                        type="password"
                        id="login-password"
                        name={LoginFormKeys.Password}
                        onChange={onChange}
                        value={values[LoginFormKeys.Password]}
                    />
                    {formValid && <p style={{color: 'red'}}>Empty fields are not allowed!</p>}
                    <button type="submit" className="register">Enter</button>
                    <h3>Don't have an account?</h3>
                    <Link className="register" to='/register'>Click here!</Link>
                </div>
                </form>
            </fieldset>
        </section>
    </div>
    )
}