import React from 'react'
import { Link } from "react-router-dom";


const Notfound = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-white px-4">

      <h1 className="text-9xl font-extrabold tracking-widest text-red-600">
        404
      </h1>

      <p className="text-2xl mt-5 text-gray-300 font-semibold">
        Page Not Found
      </p>

      <p className="text-gray-500 mt-2">
        The page you are looking for does not exist or moved
      </p>

      <Link
        to="/"
        className="mt-6 px-8 py-3 bg-red-600 hover:bg-red-500 transition rounded-lg text-lg font-semibold"
      >
        Go Home
      </Link>

    </div>
  );
}

export default Notfound
