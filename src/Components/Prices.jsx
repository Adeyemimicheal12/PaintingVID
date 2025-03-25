import React from 'react';
import { FaPhoneVolume } from 'react-icons/fa';
import prices from '../Image/prices.png';
import bghero from '../Image/bg-hero.png';
import Navbar from './Navbar';
import pchero from '../Image/Prices-image.webp';
import StickyForm from './StickyForm_prices';
import Footer from './Footer';

function Prices() {
  return (
    <main>
      <div
        className="hero pt-12 bg-cover bg-center h-[395px] md:h-[500px] px-4 md:px-20"
        style={{ backgroundImage: `url(${prices})` }}
      >
        <Navbar />
        <div className="mt-14 ml-10 md:ml-44">
          <h1 className="text-white font-bold text-4xl md:text-[36px]">Prices</h1>
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
      {/* ------------ */}
      <div
        className="hero pt-12 bg-cover bg-center h-auto md:h-[800px] px-4 md:px-20"
        style={{ backgroundImage: `url(${bghero})` }}
      >

        {/* ----------- */}
        <h1 className="font-bold text-2xl md:text-4xl text-center md:text-left">
          Costs of Hiring a Painter and Decorator in <br /> Nigeria
        </h1>
        <div className="mt-5 md:mt-10 flex flex-col md:flex-row gap-4 md:max-w-[60%]">
          <div>
            <p className="font-semibold text-base md:text-xl md:w-100 leading-relaxed">
              Painting and decoration works do not have <br /> fixed costs and much of it depends on where <br />
              you stay and the painter you choose. <br /> For example, the cost of hiring a painter and <br />
              decorator in Nigeria might be almost four <br /> times higher than hiring one in other places. <br />
              An effective tip is to decide the amount of <br /> money you would lose when you take out <br />
              time to do the work by yourself and then <br /> compare the cost of hiring a painter.
            </p>
          </div>
          <div>
            <img src={pchero} alt="" className="w-full md:max-w-[100%] h-[250px] md:h-[350px] mt-5 md:mt-10 rounded-lg" />
          </div>
        </div>
        {/* --------------------- */}

        {/* Sticky Form Sidebar - Positioned on the right */}
        {/* <div className='relative'> */}
        {/* <div className="absolute top-[600px] h right-5 z-50">
          <StickyForm />
        </div> */}
        {/* </div> */}

        {/* Average Rates Text (Moved right after the last content) */}
        <div className="px-4 md:px-20 mt-10">
          <p className="text-2xl md:text-5xl font-bold">Average Painting and Decorating Rates for <br /> the Year 2022</p>
          <p className='text-base md:text-xl pt-3'>We would give you an idea about the average prices for painting and decorating services for you. These averages <br /> have been listed below in the price table given below. If you want to know the entire costs specified for your situation,<br /> you may use our quotes service and request for different quotes from quality painters. We offer free and no obligation <br /> quotes to everyone.</p>
        </div>

        {/* 4x4 Table */}
        <div className="overflow-x-auto px-4 md:px-20 mt-5">
            <table className="w-full border-collapse border border-gray-300 text-left text-sm md:text-base">
              <thead className="bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 text-white">
                <tr>
                  <th className="border border-gray-300 p-3 md:p-8">Service</th>
                  <th className="border border-gray-300 p-3 md:p-8">Duration</th>
                  <th className="border border-gray-300 p-3 md:p-8">Cost</th>
                  <th className="border border-gray-300 p-3 md:p-8">Location</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-100">
                  <td className="border border-gray-300 p-3">Interior Painting</td>
                  <td className="border border-gray-300 p-3">3 Days</td>
                  <td className="border border-gray-300 p-3">$500</td>
                  <td className="border border-gray-300 p-3">Lagos</td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <td className="border border-gray-300 p-3">Exterior Painting</td>
                  <td className="border border-gray-300 p-3">5 Days</td>
                  <td className="border border-gray-300 p-3">$800</td>
                  <td className="border border-gray-300 p-3">Abuja</td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <td className="border border-gray-300 p-3">Wallpaper Installation</td>
                  <td className="border border-gray-300 p-3">2 Days</td>
                  <td className="border border-gray-300 p-3">$300</td>
                  <td className="border border-gray-300 p-3">Port Harcourt</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">Decorative Finishing</td>
                  <td className="border border-gray-300 p-3">4 Days</td>
                  <td className="border border-gray-300 p-3">$700</td>
                  <td className="border border-gray-300 p-3">Kano</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">Decorative Finishing</td>
                  <td className="border border-gray-300 p-3">4 Days</td>
                  <td className="border border-gray-300 p-3">$700</td>
                  <td className="border border-gray-300 p-3">Kano</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-5">Decorative Finishing</td>
                  <td className="border border-gray-300 px-4 py-2">4 Days</td>
                  <td className="border border-gray-300 px-4 py-2">$700</td>
                  <td className="border border-gray-300 px-4 py-2">Kano</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-5">Decorative Finishing</td>
                  <td className="border border-gray-300 px-4 py-2">4 Days</td>
                  <td className="border border-gray-300 px-4 py-2">$700</td>
                  <td className="border border-gray-300 px-4 py-2">Kano</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-5">Decorative Finishing</td>
                  <td className="border border-gray-300 px-4 py-2">4 Days</td>
                  <td className="border border-gray-300 px-4 py-2">$700</td>
                  <td className="border border-gray-300 px-4 py-2">Kano</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-5">Decorative Finishing</td>
                  <td className="border border-gray-300 px-4 py-2">4 Days</td>
                  <td className="border border-gray-300 px-4 py-2">$700</td>
                  <td className="border border-gray-300 px-4 py-2">Kano</td>
                </tr>
              </tbody>
            </table>
            </div>
          {/* Average Rates Text (Moved right after the last content) */}
        <div className="px-4 md:px-20 mt-10">
          <p className="text-2xl md:text-5xl font-bold">Consider the costs of Painting and Decoration  Works in Nigeria
          </p>
          <p className='text-2xl md:text-5xl font-bold'>When searching for a good painter and decorator in Nigeria, make sure you ask about
             the costs that need to be paid  for the services offered. On this basis, you are <br /> not encouraging him to avoid paying
              the tax, rather you offer to pay cash for the work to be done.
          </p>
          <p className='text-base md:text-xl pt-5 pb-10'>It is not unethical for painters and decorators to include 20% to the cost of materials used for covering the price to purchase them.
             Also, they do not want to bear the <br /> risk if not getting paid on time at the end of the job. Make sure you pay for all the materials
              purchased which will make the painter and decorator happy and satisfied.
          </p>
        </div>

         {/* Average Rates Text (Moved right after the last content) */}
         <div className="px-4 md:px-20 mt-10">
          <p className="text-2xl md:text-5xl font-bold">Ask for Free Quotes from Our Painters and Decorators
          </p>
          <p className='text-base md:text-xl pt-5 pb-10'>You will find that there is much more involved in painting and decorating works than knowing
             how to use the paintbrush or roller. We want you to be confident when <br /> you ask a painter to provide you a quote for painting your
              property. You can  recognise from their answers what they are exactly talking about, you can also ask for free quotes and compare
              between them to choose painters and decorators for your need.
          </p>
        </div>
          {/* Average Rates Text (Moved right after the last content) */}
          <div className="px-4 md:px-20 mt-10">
          <p className="text-2xl md:text-5xl font-bold">Costs to Pay for Your Painting and Decorating Works
          </p>
          <p className='text-base md:text-xl pt-5 pb-10'>Get in touch with painters and decorators in your area, request for quotes and begin comparing the rates
             to find the right tradesman for your work. Our quote service <br /> is for free that does not have any obligations at all.
          </p>
        </div>

        <div className="-ml-4 w-[20px] mb-4 px-4 md:px-10 mt-10 md:hidden md:mt-20">
        <StickyForm />
      </div>
        {/* footer */}
        <Footer/>
      </div>
    </main>
  );
}

export default Prices;
