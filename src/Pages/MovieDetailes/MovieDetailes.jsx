import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button, Typography } from "@material-tailwind/react";
import { BiMovie } from "react-icons/bi";

const MovieDetailes = () => {
    const { id } = useParams()
    const api_key = "4e82e776e14e935a505b6089cdd43427"
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`

    const [movieDetailes, setMovieDetailes] = useState(null)

    function getMovieDetailes() {
        axios.get(url)
            .then((response) => {
                setMovieDetailes(response.data)
            })
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        getMovieDetailes()
    }, [id])

    if (!movieDetailes) return <div className="flex flex-col justify-center items-center h-96">
        <BiMovie className="text-6xl text-blue-500 animate-bounce" />
        <p className="mt-4 text-white text-lg font-semibold text-center">
            Loading...
        </p>
    </div>

    return (
        <section className="relative min-h-screen text-white">
            {/* Background */}
            <div
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center filter blur-sm brightness-50 z-0"
            // style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movieDetailes.backdrop_path})` }}
            ></div>

            <div className="relative z-10 container mx-auto py-6 sm:py-12 grid md:grid-cols-2 items-center gap-6">
                {/* Poster */}
                <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-700 max-w-[200px] sm:max-w-xs mx-auto">
                    <img
                        src={`https://image.tmdb.org/t/p/w500${movieDetailes.poster_path || movieDetailes.backdrop_path}`}
                        alt={movieDetailes.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                </div>

                {/* Details */}
                <div className="flex flex-col gap-4 sm:gap-6 sm:px-20 px-0">
                    <Typography type="h3" className="text-2xl sm:text-3xl font-bold">{movieDetailes.title}</Typography>

                    {movieDetailes.tagline && (
                        <Typography type="h6" className="text-blue-400 italic text-sm sm:text-base">{movieDetailes.tagline}</Typography>
                    )}

                    <Typography className="text-gray-300 leading-relaxed text-sm sm:text-base">{movieDetailes.overview}</Typography>

                    <div className="grid grid-cols-2 gap-2 sm:gap-3 mt-1 sm:mt-2 text-xs sm:text-sm">
                        <Typography className="text-xs sm:text-sm"><span className="font-semibold">Release:</span> {movieDetailes.release_date}</Typography>
                        <Typography className="text-xs sm:text-sm"><span className="font-semibold">Rating:</span> {movieDetailes.vote_average}</Typography>
                        <Typography className="text-xs sm:text-sm"><span className="font-semibold">Vote Count:</span> {movieDetailes.vote_count}</Typography>
                        <Typography className="text-xs sm:text-sm"><span className="font-semibold">Popularity:</span> {movieDetailes.popularity}</Typography>
                    </div>

                    <Button className="mt-4 w-full sm:w-[70%] mx-auto bg-blue-600 hover:bg-blue-700 text-sm font-bold transition duration-300">
                        Watch Now
                    </Button>
                </div>

            </div>
        </section>

    )
}

export default MovieDetailes
