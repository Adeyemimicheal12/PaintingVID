import React from 'react';
import { FaPhoneVolume } from 'react-icons/fa';
import { useNavigate } from "react-router-dom"; // Import useNavigate
import painting from './our services images/painting.jpg';
import Navbar from '../Navbar';
import bghero from './our services images/bg-hero.png';

function Painting() {
    const navigate = useNavigate(); // Hook for navigation

    return (
        <main>
            <div className="hero pt-12 bg-cover bg-center h-[395px] md:h-[500px]" style={{ backgroundImage: `url(${painting})` }}>
                <Navbar />
                <div className="mt-14 ml-6 md:ml-20 lg:ml-44 text-center md:text-left">
                    <h1 className="text-white font-bold text-3xl md:text-4xl lg:text-[36px]">Painting</h1>
                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 mt-5 items-center md:items-start">
                        <a href="tel:08081295005" className="flex items-center gap-3 border-2 border-white rounded-lg p-3 hover:bg-white hover:text-black transition duration-300">
                            <FaPhoneVolume className="text-white text-2xl md:text-[24px]" />
                            <span className="text-xl md:text-[24px] text-white font-bold">080 8129 5005</span>
                        </a>
                        <button
                            className="border border-white p-3 md:p-4 font-bold text-lg md:text-xl bg-white hover:bg-blue-300 text-black hover:text-white rounded-sm transition duration-300"
                            onClick={() => navigate("/contact")} // Navigate to contact page
                        >
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
            {/* -------------- */}
            <div className="hero pt-12 bg-cover bg-center min-h-[800px] px-6 md:px-12" style={{ backgroundImage: `url(${bghero})` }}>

            </div>
        </main>
    );
}

export default Painting;
