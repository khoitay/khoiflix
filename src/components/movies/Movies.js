import React from 'react'
import Header from '../Header'
import { useState, useEffect } from 'react'
import { API_KEY } from '../config/config'
import { Link } from 'react-router-dom'
import SingleContent from '../singleContent/SingleContent'
import PaginationCustom from '../pagination/PaginationCustom'

function Movies() {
  const [select, setSelect] = useState('popular')
  const [page, setPage] = useState(1)
  const [content, setContent] = useState([])
  const [numOfPages, setNumOfPages] = useState()

  useEffect(() => {
    fetchMovies()
  }, [page, select])

  const fetchMovies = async () => {
    let respData, data
    switch (select) {
      case 'popular':
        respData = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`)
        data = await respData.json()
        break;
      case 'now playing':
        respData = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=${page}`)
        data = await respData.json()
        break;
      case 'upcoming':
        respData = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${page}`)
        data = await respData.json()
        break;
      default:
        respData = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`)
        data = await respData.json()
        break;
    }
    setContent(data.results)
    setNumOfPages(data.total_pages)
  }
  console.log(content)

  return (
    <div>
      <Header />
      <h1 style={{textAlign: 'center', marginTop: '70px'}}>MOVIES</h1>
      <div className="container-fluid" style={{display: 'flex', justifyContent: 'center'}}>
        <div class="input-group mb-3" style={{width: '70%'}}>
          <select class="custom-select" id="inputGroupSelect02" onChange={e => setSelect(e.target.value)}>
            <option value="popular">Popular</option>
            <option value="now playing">Now Playing</option>
            <option value="upcoming">Upcoming</option>
            <option value="top rated">Top Rated</option>
          </select>
        </div>
      </div>

      <div className="container d-flex flex-wrap justify-content-around">
          {content.map(item => {
            return <SingleContent 
              id={item.id}
              title={item.title}
              poster_path={item.poster_path}
              vote_average={item.vote_average}
              release_date={item.release_date}
              original_title={item.original_title}
              backdrop_path={item.backdrop_path}
              overview={item.overview}
              original_language={item.original_language}
              type={'movie'}
            />
          })}
      </div>
      <PaginationCustom setPage={setPage} numOfPages={numOfPages} />
    </div>
  )
}

export default Movies
