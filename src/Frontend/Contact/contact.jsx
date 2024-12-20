import React from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { useState } from "react";
// import axios from "axios";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  console.log("contact form data",formData);
  
  const handleSubmit = async (e) => {
    e.preventDefault();

  //   try {
  //     const response = await axios.post("/api/send-email", formData);
  //     setStatus({ type: "success", message: response.data.message });
      setFormData({ name: "", email: "", subject: "", message: "" });
  //   } catch (error) {
  //     setStatus({ type: "error", message: error.response.data.error });
    // }
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="md:text-4xl text-2xl font-extrabold text-[#c59a63]  sm:tracking-tight">
            Contact Us
          </h1>
          <p className="mt-4 max-w-2xl mx-auto md:text-xl text-gray-500">
            We'd love to hear from you. Please fill out the form below or use our contact information.
          </p>
        </div>



        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-2">

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="px-6 py-8">
              <h3 className="text-2xl text-lg font-bold text-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="mr-3 h-6 w-6 text-[#c59a63]" />
                  <p className="text-gray-600">SunGum Hotel Ali-abad Near Ali Chowk, Skardu Baltistan</p>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-3 h-6 w-6 text-[#c59a63]" />
                  <p className="text-gray-600">058453131</p>
                </div>
                <div className="flex items-center">
                  <Mail className="mr-3 h-6 w-6 text-[#c59a63]" />
                  <p className="text-gray-600">info@sungumcompany.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="px-6 py-8">
              <h3 className="md:text-2xl text-lg font-bold text-gray-900 mb-4">Send us a message</h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#c59a63] focus:outline-none"
                  required
                />
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#c59a63] focus:outline-none"
                  required
                />
                <input
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#c59a63] focus:outline-none"
                  required
                />
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#c59a63] focus:outline-none"
                  required
                />
                <button
                  className="w-full flex items-center justify-center px-4 py-2 bg-[#c59a63] text-white rounded-lg hover:bg-[#c2c3c7] transition-colors"
                >
                  Send Message
                </button>
                {/* {status && (
                  <p className={`mt-4 text-${status.type === "success" ? "green" : "red"}-600`}>
                    {status.message}
                  </p>
                )} */}
              </form>
            </div>
          </div>

        </div>
        <br />
        <div className="bg-white rounded-lg shadow-lg overflow-hidden sm:col-span-2 lg:col-span-1">
          <div className="h-full">
            <iframe
              title="Map"
              className="w-full h-full min-h-[300px]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3256.6960041926704!2d75.63570367494638!3d35.28868375143932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e46386b128d32b%3A0x1e3b3ba321b31fc!2sSungum%20Resturant%20and%20Banquet!5e0!3m2!1sen!2s!4v1734698781731!5m2!1sen!2s"
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div className="mt-16 text-center">
          <p className="text-gray-500">
            We aim to respond to all inquiries within 24 hours during business days.
          </p>
        </div>
      </div>
    </div>
  );
}
