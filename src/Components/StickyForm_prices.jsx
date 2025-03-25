import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

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
    </div>
  );
};

export default StickyForm;
