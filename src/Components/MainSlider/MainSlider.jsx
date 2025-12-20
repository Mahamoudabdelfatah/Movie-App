import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import Slider from "react-slick";

const MainSlider = () => {

  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 7,
    autoplaySpeed: 1000,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 7, // Display 6 slides on screens from 1200px and below
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 5, // Display 5 slides on screens from 992px to 1199px
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4, // Display 4 slides on screens from 768px to 991px
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3, // Display 3 slides on screens from 576px to 767px
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };



  const [popularMovies, setpopularMovies] = useState([])

  const api_key = "4e82e776e14e935a505b6089cdd43427"

  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`


  const getPopularMovies = () => {
    axios.get(url)
      .then((response) => {
        // console.log(response);
        setpopularMovies(response.data.results)

      })
      .catch((error) => {
        console.log(error);
      })

  }

  useEffect(() => {
    getPopularMovies()
  }, [])

  return (
    <div className='bg-[url("/movie.webp")] h-[80vh] w-full bg-center bg-cover'>
      <div className='flex flex-col justify-end  h-full '>
        <h3 className='text-3xl text-white'>OUR LATEST MOVIES</h3>
        <Slider {...settings}>
          {popularMovies.map((movie) => (
            <div className='' key={movie.id}>
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className='w-50 h-50 object-cover rounded-md' />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default MainSlider
