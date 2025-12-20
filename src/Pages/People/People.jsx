import React from 'react'

const People = () => {
  return (
    <div>
      People
    </div>
  )
}

export default People

// {filterdMovies?.map((movie) => (
//     <div key={movie.id} className='relative group w-full h-64 rounded-lg overflow-hidden shadow-lg bg-gradient-to-b from-gray-900/20 to-gray-900/60 cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-2xl'>
//       <img
//         src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
//         alt={movie.name}
//         className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
//       />
//       <div className='absolute bottom-0 w-full bg-gradient-to-t from-black/80 via-black/50 to-transparent text-white text-center py-3 opacity-0 group-hover:opacity-100 transition-all duration-300'>
//         <h3 className='text-lg font-semibold'>{movie.name}</h3>
//       </div>
//     </div>
//   ))}