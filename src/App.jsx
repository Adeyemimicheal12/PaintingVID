import React from 'react'
// import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Landing from './Components/Landing'
import Inses from './Components/Inses'
import Footer from './Components/Footer'
import About from './Components/About'
import Prices from './Components/Prices'
import Photo from './Components/Photo_Gallery'
import Home from './Components/Home'
import Services from './Components/Services'
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import StickyForm from './Components/StickyForm_prices'

export default function App() {
  return (
    <div>
      {/* <Navbar /> */}

      <BrowserRouter>
{/* 
      <Link to={"/"}>Home</Link>
      <Link to="/about">About</Link>
      <link to="/prices">Prices</link> */}
    
    
    

    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/prices" element={<Prices/>}></Route>
    <Route path="/services" element={<Services/>}></Route>
    <Route path='/Photo' element={<Photo/>}></Route>
    <Route path='/StickyForm' element={<StickyForm/>}></Route>
  </Routes>
  </BrowserRouter>
    </div>
  )
}
