import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { BiSearch, BiMovie } from "react-icons/bi";


const TvShow = () => {


  const [tvShow, setTvShow] = useState([])
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(false)

  const api_key = "4e82e776e14e935a505b6089cdd43427"
  const url = `https://api.themoviedb.org/3/trending/tv/week?api_key=${api_key}&page=${page}`

  function getTvShow(pageNum) {
    setLoading(true)
    axios.get(url)
      .then((response) => {
        console.log(response.data.results);
        setTvShow(response.data.results)
        setPage(pageNum)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error);
        setLoading(false)
      })
  }

  useEffect(() => {
    getTvShow(page)
  }, [])

  const filterdMovies = tvShow.filter((movie) =>
    movie.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <>
      {/* Loading */}
      {loading ? (
        <div className="flex flex-col justify-center items-center h-96">
          <BiMovie className="text-6xl text-blue-500 animate-bounce" />
          <p className="mt-4 text-white text-lg font-semibold text-center">
            Loading...
          </p>
        </div>
      ) : (
        <div className='mt-10 px-4'>
          {/* Search */}
          <div className="search flex justify-center">
            <div className="relative w-full max-w-xl">
              <BiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 text-2xl" />
              <input
                type="text"
                placeholder="Search Movies..."
                className="w-full py-4 pl-14 pr-5 rounded-2xl bg-[#1b1e24] text-white 
                      placeholder:text-gray-400 focus:outline-none border border-gray-700
                      focus:border-blue-600 transition text-lg"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
          {/* Movies */}
          <div className='container mx-auto grid gap-6 px-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-5'>
            {filterdMovies?.length === 0 && search.trim() !== "" &&
              <div className="col-span-full flex justify-center items-center mt-10 cursor-pointer">
                <div className="bg-gradient-to-r from-[#1b1e24] to-[#0D253F] px-10 py-8 rounded-3xl shadow-[0_10px_25px_rgba(0,0,0,0.5)] border border-gray-600 flex flex-col items-center transform transition duration-500 hover:scale-105">
                  <h1 className="text-center text-white text-4xl font-extrabold mb-3 animate-pulse">
                    No Tv Show
                  </h1>
                  <p className="text-gray-300 text-lg text-center">
                    Try searching for something else or check back later.
                  </p>

                </div>
              </div>}
            {filterdMovies?.map((movie) => (
              <div key={movie.id} className='relative group w-full h-80 rounded-lg overflow-hidden shadow-lg bg-gradient-to-b from-gray-900/20 to-gray-900/60 cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-2xl'>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                  alt={movie.name}
                  className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                />
                <div className='absolute bottom-0 w-full bg-gradient-to-t from-black/80 via-black/50 to-transparent text-white text-center py-4 opacity-0 group-hover:opacity-100 transition-all duration-300'>
                  <h3 className='text-lg font-semibold'>{movie.name}</h3>
                </div>
              </div>
            ))}

          </div>
          {/* Pagination  */}
          {filterdMovies.length > 0 &&
            <div className='flex justify-center mt-5 space-x-3'>
              {[1, 2, 3, 4, 5].map((num) => (
                <button
                  key={num}
                  onClick={() => getTvShow(num)}
                  className={`px-4 py-2 rounded-md text-white font-bold ${page === num ? "bg-blue-600" : "bg-[#1b1e24] hover:bg-blue-700"}`}
                >

                </button>
              ))}
            </div>}
        </div>




      )}

    </>
  )
}

export default TvShow
