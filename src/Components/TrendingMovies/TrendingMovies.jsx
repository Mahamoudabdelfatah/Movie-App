import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const TrendingMovies = () => {



    const api_key = "4e82e776e14e935a505b6089cdd43427"
    const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${api_key}`
    const [trendingMovies, setTrendingMovies] = useState([])

    function getTrendingMovies() {
        axios.get(url)
            .then((response) => {
                console.log(response.data.results);
                setTrendingMovies(response.data.results)
            })
            .catch((error) => error)

    }

    useEffect(() => {
        getTrendingMovies()
    }, [])


    return (
        <div className='mt-10'>
            <div className='text-white text-center mb-10'>
                <h1 className='text-4xl font-bold'>Trending Movies To Watch</h1>
                <h1 className='text-3xl font-semibold mt-2'>Below Now</h1>
                <h3 className='mt-2 text-gray-300'>Most watched movies this week</h3>
            </div>
            <div className='container mx-auto grid gap-6 px-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
                {trendingMovies.map((movie) => (
                    <Link key={movie.id} to={`/moviedetails/${movie.id}`}>
                        <div className="bg-[#0D253F] cursor-pointer text-white rounded-lg shadow-lg overflow-hidden hover:scale-105 duration-300">
                            <div className="m-2.5 overflow-hidden rounded-md h-80 flex justify-center items-center">
                                <img className="w-full h-64 object-cover" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                            </div>
                            <div className="p-4">
                                <h4 className="text-lg font-semibold text-center">
                                    {movie.title.split(" ").slice(0, 2).join(" ")}
                                </h4>

                            </div>

                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default TrendingMovies
