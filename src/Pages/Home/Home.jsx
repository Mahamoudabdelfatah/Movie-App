import React from 'react'
import MainSlider from '../../Components/MainSlider/MainSlider'
import TrendingMovies from '../../Components/TrendingMovies/TrendingMovies'
import TrendingPeople from '../../Components/TrendingPeople/TrendingPeople'

const Home = () => {
    return (
        <>
            <MainSlider />
            <TrendingMovies />
            <TrendingPeople />
        </>
    )
}

export default Home
