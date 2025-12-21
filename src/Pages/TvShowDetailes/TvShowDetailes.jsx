import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Button, Typography } from "@material-tailwind/react";
import { BiMovie } from "react-icons/bi";

const TvShowDetailes = () => {

    const { id } = useParams()

    const api_key = "4e82e776e14e935a505b6089cdd43427"
    const url = `https://api.themoviedb.org/3/tv/${id}?api_key=${api_key}`

    const [tvShowDetailes, setTvShowDetailes] = useState(null)

    function getTvShowDetailes() {
        axios.get(url)
            .then((response) => {
                console.log(response.data);
                setTvShowDetailes(response.data)
            })
            .catch((error) => {
                console.log(error);

            })
    }

    useEffect(() => {
        getTvShowDetailes()
    }, [id])

    if (!tvShowDetailes) return <div className="flex flex-col justify-center items-center h-96">
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
            // style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${tvShowDetailes.backdrop_path})` }}
            ></div>

            <div className="relative z-10 container mx-auto py-6 sm:py-12 grid md:grid-cols-2 items-center gap-6">
                {/* Poster */}
                <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-700 max-w-[200px] sm:max-w-xs mx-auto">
                    <img
                        src={`https://image.tmdb.org/t/p/w500${tvShowDetailes.poster_path}`}
                        alt={tvShowDetailes.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                </div>

                {/* Details */}
                <div className="flex flex-col gap-4 sm:gap-6 sm:px-20 px-0">
                    <Typography type="h3" className="text-2xl sm:text-3xl font-bold">{tvShowDetailes.name}</Typography>

                    {tvShowDetailes.tagline && (
                        <Typography type="h6" className="text-blue-400 italic text-sm sm:text-base">{tvShowDetailes.tagline}</Typography>
                    )}

                    <Typography className="text-gray-300 leading-relaxed text-sm sm:text-base">{tvShowDetailes.overview}</Typography>

                    <div className="grid grid-cols-2 gap-2 sm:gap-3 mt-1 sm:mt-2 text-xs sm:text-sm">
                        <Typography className="text-xs sm:text-sm"><span className="font-semibold">First Air Date:</span> {tvShowDetailes.first_air_date}</Typography>
                        <Typography className="text-xs sm:text-sm"><span className="font-semibold">Rating:</span> {tvShowDetailes.vote_average}</Typography>
                        <Typography className="text-xs sm:text-sm"><span className="font-semibold">Vote Count:</span> {tvShowDetailes.vote_count}</Typography>
                        <Typography className="text-xs sm:text-sm"><span className="font-semibold">Popularity:</span> {tvShowDetailes.popularity}</Typography>
                    </div>

                    <Button className="mt-4 w-full sm:w-[70%] mx-auto bg-blue-600 hover:bg-blue-700 text-sm font-bold transition duration-300">
                        Watch Now
                    </Button>
                </div>

            </div>
        </section>
    )
}

export default TvShowDetailes
