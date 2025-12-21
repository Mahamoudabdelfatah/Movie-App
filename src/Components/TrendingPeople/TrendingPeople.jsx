import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const TrendingPeople = () => {

  const api_key = "4e82e776e14e935a505b6089cdd43427"
  const url = `https://api.themoviedb.org/3/trending/person/week?api_key=${api_key}`
  const [trendingPeople, setTrendingPeople] = useState([])

  function getTrendingMovies() {
    axios.get(url)
      .then((response) => {
        console.log(response.data.results);
        setTrendingPeople(response.data.results)
      })
      .catch((error) => error)
  }

  useEffect(() => {
    getTrendingMovies()
  }, [])

  return (
    <div className='mt-10'>
      <div className='text-white text-center mb-10'>
        <h1 className='text-4xl font-bold'>Trending People To Follow</h1>
        <h1 className='text-3xl font-semibold mt-2'>Below Now</h1>
        <h3 className='mt-2 text-gray-300'>most watched people by weeks</h3>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 px-5'>
        {trendingPeople.map((people) => (
          <Link key={people.id} to={`/peopledetailes/${people.id}`}>
            <div className='cursor-pointer relative group w-full h-64 overflow-hidden rounded-lg shadow-lg'>
              <img src={`https://image.tmdb.org/t/p/w500${people.profile_path}`} alt="" className='w-full h-full object-cover transition-all duration-300 group-hover:scale-110' />
              <div className='absolute bottom-0 w-full opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black bg-opacity-70 text-white text-center py-2'>
                <h3 className='font-semibold'>{people.name}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default TrendingPeople
