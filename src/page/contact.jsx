import React from "react";

const Contact = () => {
  return (
    <div className="p-4 min-h-screen justify-center items-center bg-[#020312] flex text-white">
      <form className="bg-[#0d0f25] p-8 w-full max-w-md rounded-2xl shadow-lg">
        <h2 className="text-red-500 font-bold text-center text-3xl mb-6">
          Contact Me
        </h2>
        <div className="mb-4">
          <lebel className="block font-medium text-sm mb-1 ">
            Full Name
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your name"
              className="w-full p-3 rounded-md bg-transparent border border-white/30 focus:border-red-500 focus:outline-none"
            />
          </lebel>
        </div>
        <div className="mb-4">
          <lebel className="block font-medium text-sm mb-1">
            Email Address
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="w-full p-3 rounded-md bg-transparent border border-white/30 focus:border-red-500 focus:outline-none"
            />
          </lebel>
        </div>
        <div className="mb-4">
          <lebel className="block font-medium text-sm mb-1">
            Phone Number
            <input
              type="number"
              name="namber"
              required
              placeholder="Enter your number"
              className="w-full p-3 rounded-md bg-transparent border border-white/30 focus:border-red-500 focus:outline-none"
            />
          </lebel>
        </div>
        <div className="mb-4">
          <lebel className="block font-medium text-sm mb-1">
            Your Message
            <textarea
              name="message"
              required
              placeholder="Write Your Message ..."
              rows="5"
              className="w-full p-3 rounded-md bg-transparent border border-white/30 focus:border-red-500 focus:outline-none resize-none"
            />
          </lebel>
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
