import React from "react";

const About = () => {
  return (
    <div className=" bg-[#0D253F] flex justify-center items-center px-4 py-10">
      <div className="w-full max-w-4xl bg-[#1b1e24] rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.6)] border border-gray-700 p-6">

        {/* Header */}
        <h1 className="text-center text-white text-3xl font-bold tracking-wide">
          About Us
        </h1>
        <p className="text-center text-gray-300 mt-2 text-base">
          Learn more about our journey and mission
        </p>

        {/* Content */}
        <div className="mt-8 grid md:grid-cols-2 gap-6">

          {/* Left Side - Text */}
          <div className="flex flex-col justify-center">
            <h3 className="text-white text-xl font-semibold mb-4">
              Our Mission
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Our mission is to provide movie enthusiasts with the latest trending
              films and TV shows in an easy-to-use platform. We are committed to
              delivering accurate information and a delightful user experience.
              Our team works tirelessly to ensure the content is updated daily and
              that users can discover new favorites effortlessly.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed mt-3">
              We believe that movies and TV shows are a way to connect people,
              inspire creativity, and bring joy to everyone. Join us on this journey
              to explore and enjoy the world of entertainment.
            </p>
          </div>

          {/* Right Side - Text Box */}
          <div className="flex flex-col justify-center items-center text-center px-4 py-6 bg-[#0D253F] rounded-lg shadow-inner border border-gray-700">
            <h3 className="text-white text-xl font-semibold mb-2">
              Who We Are
            </h3>
            <p className="text-gray-400 text-sm">
              We are a team of movie lovers and developers who are passionate about
              building a platform where people can explore trending movies and TV shows.
              Our goal is to make movie discovery fun, fast, and interactive.
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Whether you're looking for a blockbuster or an indie gem, we've got you covered! 🎬
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
