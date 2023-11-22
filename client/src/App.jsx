import {Routes, Route, useNavigate} from 'react-router-dom'
import { useState, useEffect } from "react";

import * as authService from './services/authService';
import AuthContext from './contexts/authContext';
import Path from './paths';


import Header from "./components/Header/Header"
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import Catalogue from './components/catalogue/Catalogue'
import UserDetails from './components/UserDetails/UserDetails'
import ProductDetails from './components/ProductDetails/ProductDetails'
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import Register from './components/register/Register';

const baseUrl = 'http://localhost:3030/jsonstore'

function App() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch(`${baseUrl}/products`)
            .then(res => res.json())
            .then(result => {
        result = Object.values(result)
        setProducts(result)
          })
    }, [])


    const navigate = useNavigate();
    const [auth, setAuth] = useState(() => {
        localStorage.removeItem('accessToken');

        return {};
    });

    const loginSubmitHandler = async (values) => {
        const result = await authService.login(values.email, values.password);

        setAuth(result);

        localStorage.setItem('accessToken', result.accessToken);

        navigate(Path.Home);
    };

    const registerSubmitHandler = async (values) => {
        const result = await authService.register(values.email, values.password);

        setAuth(result);

        localStorage.setItem('accessToken', result.accessToken);

        navigate(Path.Home);
    };

    const logoutHandler = () => {
        setAuth({});

        localStorage.removeItem('accessToken');
    };

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        username: auth.username || auth.email,
        email: auth.email,
        isAuthenticated: !!auth.accessToken,
    };

  return (
    <AuthContext.Provider value={values}>
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/catalogue' element={<Catalogue products={products}/>}/>
        <Route path='user/details' element={<UserDetails />} />
        <Route path='product/details/:pk' element={<ProductDetails products={products}/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path={Path.Logout} element={<Logout />} />
      </Routes>

      <Footer />
    </>
    </AuthContext.Provider>
  )
}

export default App
