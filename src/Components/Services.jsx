import React from 'react'
import Ser from '../Image/services.png'
import Navbar from './Navbar'
export default function Services() {
  return (
    <div>
        <div className="hero pt-12 bg-cover bg-center h-[395px] md:h-[500px] px-4 md:px-20" style={{ backgroundImage: `url(${Ser})` }}>
            <Navbar/>
             <div className="mt-14 ml-10 md:ml-44">
                      <h1 className="text-white font-bold text-4xl md:text-[36px]">Services</h1>
                      <div className="flex md:flex-row gap-4 md:gap-6 mt-5 items-center">
                        <button className="flex items-center gap-3 border-2 border-white rounded-lg p-3">
                          <FaPhoneVolume className="text-white text-lg md:text-[24px]" />
                          <span className="text-sm md:text-[15px] text-white font-bold">080 8129 5005</span>
                        </button>
                        <button className="border border-white px-4 py-3 font-bold text-sm md:text-xl bg-white hover:bg-blue-300 text-black hover:text-white rounded-sm transition duration-300">
                          Contact Us
                        </button>
                      </div>
                    </div>             
        </div>
    </div>
  )
}
