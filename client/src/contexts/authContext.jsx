import { useNavigate } from 'react-router-dom';
import { useState, createContext } from "react";

import * as authService from '../services/authService';
import usePersistedState from "../hooks/usePersistedState";
import Path from '../paths';


const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const [auth, setAuth] = usePersistedState('auth', {});
    const [errorMessages, setErrorMessages] = useState({
        login: '',
        register: ''
    })


    const loginSubmitHandler = async (values) => {
        try {
            const result = await authService.login(values.email, values.password);

            setAuth(result);
            setErrorMessages(state => ({
                ...state,
                login: ''
            }))
            
            localStorage.setItem('accessToken', result.accessToken);
            
            navigate(Path.Home);

        } catch (error) {
            const errorMessage = error.message
            setErrorMessages(state => ({
                ...state,
                login: errorMessage
            }))
        }

    };

    const registerSubmitHandler = async (values) => {
        try {
            
        const result = await authService.register(values.email, values.password, values.username, values.profilePictureUrl);

        setAuth(result);
        setErrorMessages(state => ({
            ...state,
            register: 'errorMessage'
        }))

        localStorage.setItem('accessToken', result.accessToken);

        navigate(Path.Home);

        } catch (error) {
            const errorMessage = error.message
            setErrorMessages(state => ({
                ...state,
                register: errorMessage
            }))
        }
    
    
    };


    const logoutHandler = () => {
        setAuth({});

        localStorage.removeItem('accessToken');
    };
    
    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        username: auth.username,
        email: auth.email,
        userId: auth._id,
        profilePictureUrl: auth.profilePictureUrl,
        isAuthenticated: !!auth.accessToken,
        errorMessages: errorMessages,
    };
    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
}

AuthContext.displayName = 'AuthContext';

export default AuthContext;