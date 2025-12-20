import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#0D253F] flex justify-center items-center px-4 py-10">
      {/* Wrapper */}
      <div className="w-full max-w-5xl bg-[#1b1e24] rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.6)] border border-gray-700 p-6">

        {/* Header */}
        <h1 className="text-center text-white text-3xl font-bold tracking-wide">
          Contact Us
        </h1>
        <p className="text-center text-gray-300 mt-2 text-base">
          Have questions? Reach out anytime!
        </p>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">

          {/* Left Form */}
          <div>
            <form className="space-y-4">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full py-2.5 px-4 bg-[#0d253f] rounded-lg text-white 
                placeholder-gray-400 border border-gray-600 focus:border-blue-500 outline-none"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full py-2.5 px-4 bg-[#0d253f] rounded-lg text-white 
                placeholder-gray-400 border border-gray-600 focus:border-blue-500 outline-none"
              />

              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full py-3 px-4 bg-[#0d253f] rounded-lg text-white 
                placeholder-gray-400 border border-gray-600 focus:border-blue-500 outline-none resize-none"
              ></textarea>

              <button
                type="submit"
                className="w-full py-3 bg-[#0d253f] hover:bg-blue-700 text-white font-semibold 
                rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.5)] transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Side - Text instead of Image */}
          <div className="flex flex-col justify-center items-center text-center px-4 py-6 bg-[#0D253F] rounded-lg shadow-inner border border-gray-700">
            <h3 className="text-white text-xl font-semibold mb-2">
              Welcome to Our Contact Page
            </h3>
            <p className="text-gray-400 text-sm">
              Here you can send us a message and our team will get back to you as soon as possible.
              We love hearing from you and answering any questions you have about our services.
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Feel free to share feedback, suggestions, or just say hello! 💬
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Contact;
