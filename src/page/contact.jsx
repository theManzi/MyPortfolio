import React, { useState } from "react";
import { data } from "react-router-dom";

const Contact = () => {
  const [formdata, setFormData] = useState({});

  const handleform = (e) => {
    e.preventDefault();
    console.log( formdata );
  };
  return (
    <div className="p-4 min-h-screen justify-center items-center bg-[#020312] flex text-white">
      <form
        onSubmit={(e) => handleform(e)}
        className="bg-[#0d0f25] p-8 w-full max-w-md rounded-2xl shadow-lg mt-10"
      >
        <h2 className="text-red-500 font-bold text-center text-3xl mb-6">
          Contact Me
        </h2>
        <div className="mb-4">
          <span className="block font-medium text-sm mb-1 ">Full Name</span>
          <input
            type="text"
            name="name"
            value={formdata.name}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, name: e.target.value }))
            }
            required
            placeholder="Enter your name"
            className="w-full p-3 rounded-md bg-transparent border border-white/30 focus:border-red-500 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <span className="block font-medium text-sm mb-1">Email Address</span>
          <input
            type="email"
            name="email"
            value={formdata.email}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, email: e.target.value }))
            }
            required
            placeholder="Enter your email"
            className="w-full p-3 rounded-md bg-transparent border border-white/30 focus:border-red-500 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <span className="block font-medium text-sm mb-1">Phone Number</span>
          <input
            type="number"
            name="phone"
            value={formdata.phone}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, phone: e.target.value }))
            }
            required
            placeholder="Enter your number"
            className="w-full p-3 rounded-md bg-transparent border border-white/30 focus:border-red-500 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <span className="block font-medium text-sm mb-1">Your Message</span>
          <textarea
            name="message"
            value={formdata.message}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, message: e.target.value }))
            }
            required
            placeholder="Write Your Message ..."
            rows="5"
            className="w-full p-3 rounded-md bg-transparent border border-white/30 focus:border-red-500 focus:outline-none resize-none"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-lg font-semibold bg-red-500 text-white py-3 hover:bg-transparent hover:border hover:boder-red-500 teanslate hover:-translate-y-1 duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
