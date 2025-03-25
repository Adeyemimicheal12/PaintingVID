import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Navbar from "./Navbar";
import bghero from "../Image/bg-hero.png"

const StickyForm = () => {
  const [captchaValue, setCaptchaValue] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      alert("Please fill in all fields.");
      return;
    }
    if (!captchaValue) {
      alert("Please verify the CAPTCHA.");
      return;
    }
    console.log("Form submitted:", formData);
  };
  
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ba46189a-b38b-4093-9bac-8c4c73d10d7b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
<<<<<<< Tabnine <<<<<<<
  // ... previous code remains the same//+
  //+
  const StickyForm = () => {//+
    const [captchaValue, setCaptchaValue] = useState(null);//+
    const [formData, setFormData] = useState({//+
      name: "",//+
      email: "",//+
      phone: "",//+
      message: "",//+
    });//+
  //+
    const handleCaptchaChange = (value) => {//+
      setCaptchaValue(value);//+
    };//+
  //+
    const handleChange = (e) => {//+
      setFormData({ ...formData, [e.target.name]: e.target.value });//+
    };//+
  //+
    const handleSubmit = (e) => {//+
      e.preventDefault();//+
      if (!formData.name || !formData.email || !formData.phone || !formData.message) {//+
        alert("Please fill in all fields.");//+
        return;//+
      }//+
      if (!captchaValue) {//+
        alert("Please verify the CAPTCHA.");//+
        return;//+
      }//+
      console.log("Form submitted:", formData);//+
    };//+
  //+
    const [result, setResult] = React.useState("");//+
    const onSubmit = async (event) => {//+
      event.preventDefault();//+
      setResult("Sending....");//+
      const formData = new FormData(event.target);//+
  //+
      formData.append("access_key", "ba46189a-b38b-4093-9bac-8c4c73d10d7b");//+
  //+
      const response = await fetch("https://api.web3forms.com/submit", {//+
        method: "POST",//+
        body: formData//+
      });//+
  //+
      const data = await response.json();//+
  //+
      if (data.success) {//+
        alert("Success", data);//+
        setResult(data.message);//+
        event.target.reset();//+
      } else {//+
        alert("Error", data);//+
        setResult(data.message);//+
      }//+
    };//+
  //+
    return (//+
      // ... previous code remains the same//+
    );//+
  };//+
  //+
  export default StickyForm;//+
>>>>>>> Tabnine >>>>>>>// {"conversationId":"d5463691-e35c-46f9-ad7a-71b38e80c122","source":"instruct"}

    if (data.success) {
      alert("Success", data);
      setResult(data.message);
      event.target.reset();
    } else {
      alert("Error", data);
      setResult(data.message);
    }
  };
  return (
<<<<<<< HEAD
    <div className="sticky right-5 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 p-6 shadow-lg w-107 h-150 border border-gray-200">
      <h2 className="text-4xl font-bold mb-4 text-white text-center">REQUEST A QUOTE</h2>
      <form onSubmit={handleSubmit, onSubmit}>
        <div className="mb-3">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full mt-2 p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-white"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mt-2 p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-white"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-3">
          <input
            type="number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full mt-2 p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-white"
            placeholder="Enter your phone number"
          />
        </div>
        <div className="mb-3">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full mt-2 p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-white"
            placeholder="Your message"
          ></textarea>
        </div>
        <div className="mb-3">
          <ReCAPTCHA sitekey="YOUR_SITE_KEY_HERE" onChange={handleCaptchaChange} />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-4 mt-3 rounded-md hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
      <span>{result}</span>
=======
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4"  style={{ backgroundImage: `url(${bghero})` }}>
      <Navbar />
      <div className="bg-gradient-to-r from-blue-500 mt-5 via-purple-500 to-green-500 p-6 shadow-lg w-full max-w-md md:max-w-lg lg:max-w-xl border border-gray-200 rounded-lg">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white text-center">
          REQUEST A QUOTE
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-200"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-200"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <input
              type="number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-200"
              placeholder="Enter your phone number"
            />
          </div>
          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-200"
              placeholder="Your message"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <ReCAPTCHA sitekey="6LcVzP4qAAAAAIkICgm1vjflLZ6J_SVMXOo8SGUd" onChange={handleCaptchaChange} />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
>>>>>>> 9ab36795a0c4dca401f38e4bbc2dc027518db044
    </div>
  );
};

export default StickyForm;