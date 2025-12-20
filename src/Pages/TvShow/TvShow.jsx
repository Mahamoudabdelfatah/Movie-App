import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'

const TvShow = () => {


  const [tvShow, setTvShow] = useState([])
  const [page, setPage] = useState(1)

  const api_key = "4e82e776e14e935a505b6089cdd43427"
  const url = `https://api.themoviedb.org/3/trending/tv/week?api_key=${api_key}&page=${page}`

  function getTvShow(pageNum) {
    axios.get(url)
      .then((response) => {
        console.log(response.data.results);

      })
  }

  useEffect(() => {
    getTvShow(page)
  }, [])

  return (
    <div>
      TV Show
    </div>
  )
}

export default TvShow
