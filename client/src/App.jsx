import {Routes, Route} from 'react-router-dom'
import { useState, useEffect } from "react";

import {AuthProvider} from './contexts/authContext';
import Path from './paths';

import AuthGuard from "./components/guards/AuthGuard"
import Header from "./components/Header/Header"
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import Catalogue from './components/Catalogue/Catalogue'
import UserDetails from './components/UserDetails/UserDetails'
import ProductDetails from './components/ProductDetails/ProductDetails'
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import Register from './components/register/Register';
import ProductCreate from './components/ProductCreate/ProductCreate';
import ProductEdit from './components/productEdit/productEdit';


function App() {
  return (
    <AuthProvider>
    <>
      <Header />

      <Routes>
        <Route path={Path.Home} element={<Home />}/>
        <Route path='/catalogue' element={<Catalogue/>}/>
        <Route path='product/details/:productId' element={<ProductDetails/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<AuthGuard />}>
                <Route path="/product/create" element={<ProductCreate />} />
                <Route path={Path.ProductEdit} element={<ProductEdit />} />
                <Route path='user/details' element={<UserDetails />} />
                <Route path={Path.Logout} element={<Logout />} />
        </Route>
      </Routes>

      <Footer />
    </>
    </AuthProvider>
  )
}

export default App
