import {Routes, Route} from 'react-router-dom'
import { useState, useEffect } from "react";

import {AuthProvider} from './contexts/authContext';
import Path from './paths';

import AuthGuard from "./components/guards/AuthGuard"
import Header from "./components/Header/Header"
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import Catalogue from './components/catalogue/Catalogue'
import UserDetails from './components/UserDetails/UserDetails'
import ProductDetails from './components/ProductDetails/ProductDetails'
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import Register from './components/register/Register';
import ProductCreate from './components/ProductCreate/ProductCreate';

const baseUrl = 'http://localhost:3030/data'

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


    

  return (
    <AuthProvider>
    <>
      <Header />

      <Routes>
        <Route path={Path.Home} element={<Home />}/>
        <Route path='/catalogue' element={<Catalogue products={products}/>}/>
        <Route path='user/details' element={<UserDetails />} />
        <Route path='product/details/:productId' element={<ProductDetails products={products}/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<AuthGuard />}>
                <Route path="/product/create" element={<ProductCreate />} />
                {/* <Route path={Path.ProductEdit} element={<ProductEdit />} /> */}
                <Route path={Path.Logout} element={<Logout />} />
        </Route>
      </Routes>

      <Footer />
    </>
    </AuthProvider>
  )
}

export default App
