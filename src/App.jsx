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
<<<<<<< HEAD
import Services from './Components/Services'
=======
import Painting from './Components/Our services/Painting_Design'
>>>>>>> 9ab36795a0c4dca401f38e4bbc2dc027518db044
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
    <Route path='/Painting' element={<Painting/>}></Route>
    <Route path="/Our-services/Painting_Design" element={<Painting />} />
  </Routes>
  </BrowserRouter>
    </div>
  )
}
