import React, {useState, useEffect} from 'react'
import Header from '../Header'
import PaginationCustom from '../pagination/PaginationCustom'
import SingleContent from '../singleContent/SingleContent'
import { API_KEY } from '../config/config'

function Series() {
    const [select, setSelect] = useState('popular')
  const [page, setPage] = useState(1)
  const [content, setContent] = useState([])
  const [numOfPages, setNumOfPages] = useState()

  useEffect(() => {
    fetchSeries()
  }, [page, select])

  const fetchSeries = async () => {
    let respData, data
    switch (select) {
      case 'popular':
        respData = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=${page}`)
        data = await respData.json()
        break;
      case 'airing today':
        respData = await fetch(`https://api.themoviedb.org/3/tv/airing_today?api_key=${API_KEY}&language=en-US&page=${page}`)
        data = await respData.json()
        break;
      case 'on tv':
        respData = await fetch(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${API_KEY}&language=en-US&page=${page}`)
        data = await respData.json()
        break;
      default:
        respData = await fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`)
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
      <h1 style={{textAlign: 'center', marginTop: '70px'}}>TV Shows</h1>
      <div className="container-fluid" style={{display: 'flex', justifyContent: 'center'}}>
        <div class="input-group mb-3" style={{width: '70%'}}>
          <select class="custom-select" id="inputGroupSelect02" onChange={e => setSelect(e.target.value)}>
            <option value="popular">Popular</option>
            <option value="airing today">Airing Today</option>
            <option value="on tv">On TV</option>
            <option value="top rated">Top Rated</option>
          </select>
        </div>
      </div>

      <div className="container d-flex flex-wrap justify-content-around">
          {content.map(item => {
            return <SingleContent 
              id={item.id}
              title={item.name}
              poster_path={item.poster_path}
              vote_average={item.vote_average}
              release_date={item.first_air_date}
              original_title={item.original_title}
              backdrop_path={item.backdrop_path}
              overview={item.overview}
              original_language={item.original_language}
              type={'tv'}
            />
          })}
      </div>
      <PaginationCustom setPage={setPage} numOfPages={numOfPages} />
    </div>
  )
}

export default Series
