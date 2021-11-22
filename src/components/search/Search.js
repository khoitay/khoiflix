import React, {useState, useEffect} from 'react'
import Header from '../Header'
import SingleContent from '../singleContent/SingleContent'
import PaginationCustom from '../pagination/PaginationCustom'
import { API_KEY } from '../config/config'

function Search() {
  const [page, setPage] = useState(1)
  const [content, setContent] = useState([])
  const [numOfPages, setNumOfPages] = useState()
  const [input, setInput] = useState('')


  const fetchContent = async (e) => {
    e.preventDefault()
    const respData = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&page=${page}&include_adult=false&query=${input}`)
    const data = await respData.json()
    setContent(data.results)
    setNumOfPages(data.total_pages)
  }

  return (
    <div>
      <Header />
      <form style={{paddingTop: '70px'}}>
        <input type="text" onChange={(e) => setInput(e.target.value)} />
        <button type="submit" onClick={fetchContent}>Submit</button>
      </form>
      <div className="container d-flex flex-wrap justify-content-around">
          {content.map(item => {
            return <SingleContent 
              id={item.id}
              title={item.title || item.name}
              poster_path={item.poster_path}
              vote_average={item.vote_average}
              release_date={item.release_date || item.first_air_date}
              original_title={item.original_title}
              backdrop_path={item.backdrop_path}
              overview={item.overview}
              original_language={item.original_language}
              type={item.media_type}
            />
          })}
      </div>
      <PaginationCustom setPage={setPage} numOfPages={numOfPages} />
    </div>
  )
}

export default Search
