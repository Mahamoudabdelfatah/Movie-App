import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Typography, Button } from "@material-tailwind/react";
import { BiMovie } from "react-icons/bi";



const PeopleDetailes = () => {

  const { id } = useParams()
  const api_key = "4e82e776e14e935a505b6089cdd43427"

  const url = `https://api.themoviedb.org/3/person/${id}?api_key=${api_key}`


  const [peopleDetailes, setPeopleDetailes] = useState(null)

  function getPeopleDetailes() {
    axios.get(url)
      .then((response) => {
        setPeopleDetailes(response.data)
      })
      .catch((error) => {
        console.log(error);

      })
  }

  useEffect(() => {
    getPeopleDetailes()
  }, [id])



 if (!peopleDetailes) return <div className="flex flex-col justify-center items-center h-96">
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
      // style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${peopleDetailes.backdrop_path})` }}
      ></div>

      <div className="relative z-10 container mx-auto py-6 sm:py-12 grid md:grid-cols-2 items-center gap-6">
        {/* Poster */}
        <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-700 max-w-[200px] sm:max-w-xs mx-auto">
          <img
            src={`https://image.tmdb.org/t/p/w500${peopleDetailes.profile_path}`}
            alt={peopleDetailes.name}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Details */}
        <div className="flex flex-col gap-4 sm:gap-6 sm:px-8 px-2">
          <Typography type="h3" className="text-2xl sm:text-3xl font-bold">{peopleDetailes.name}</Typography>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 mt-2 text-xs sm:text-sm">
            <Typography><span className="font-semibold">Birthday:</span> {peopleDetailes.birthday}</Typography>
            <Typography><span className="font-semibold">Place of Birth:</span> {peopleDetailes.place_of_birth}</Typography>
            <Typography><span className="font-semibold">Known For:</span> {peopleDetailes.known_for_department}</Typography>
          </div>
          <Typography className="text-gray-300 text-sm sm:text-base">{peopleDetailes.biography.split(" ").slice(0, 50).join(" ")}</Typography>

        </div>
      </div>
    </section>
  )
}

export default PeopleDetailes
