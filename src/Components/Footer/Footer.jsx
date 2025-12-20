import React from "react";
import { FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-20 bg-[#0f1115] text-gray-300 py-10 px-6">

      {/* container */}
      <div className="max-w-6xl mx-auto">

        {/* Top */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-white">Movie World</h2>
            <p className="text-gray-400 mt-2">
              Watch trending movies, actors & TV shows.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5 text-2xl">
            <a href="#" className="hover:text-white transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-white transition"><FaInstagram /></a>
            <a href="#" className="hover:text-white transition"><FaGithub /></a>
          </div>

        </div>

        {/* Divider */}
        <div className="w-full my-6 border-t border-gray-700"></div>

        {/* Bottom */}
        <p className="text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Movie World. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
