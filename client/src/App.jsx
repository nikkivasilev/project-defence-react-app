import {Routes, Route} from 'react-router-dom'
import { useState, useEffect } from "react";


import Header from "./components/Header/Header"
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import Catalogue from './components/catalogue/Catalogue'
import UserDetails from './components/UserDetails/UserDetails'
import ProductDetails from './components/ProductDetails/ProductDetails'

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


  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/catalogue' element={<Catalogue products={products}/>}/>
        <Route path='user/details' element={<UserDetails />} />
        <Route path='product/details/:pk' element={<ProductDetails />} />

      </Routes>

      <Footer />
    </>
  )
}

export default App
