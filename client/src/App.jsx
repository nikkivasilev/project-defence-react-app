import {Routes, Route} from 'react-router-dom'

import Header from "./components/Header/Header"
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import Catalogue from './components/catalogue/Catalogue'
import UserDetails from './components/UserDetails/UserDetails'

function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/catalogue' element={<Catalogue />}/>
        <Route path='user/details' element={<UserDetails />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
