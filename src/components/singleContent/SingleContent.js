import React from 'react'
import './SingleContent.css'
import { img_300, unavailable } from '../config/config'
import { useNavigate } from 'react-router-dom'

function SingleContent({type, title, poster_path, release_date, vote_average, original_title, backdrop_path, overview, original_language, id}) {
  let navigate = useNavigate()

  const goToDetails = () => {
    navigate('/details', {state: {type: type, title: title, id: id, poster_path: poster_path, release_date: release_date, vote_average: vote_average, original_title: original_title, original_language: original_language, backdrop_path: backdrop_path, overview: overview}})
  }

  return (
    <div className="singleContent" onClick={goToDetails}>
      <img src={poster_path ? `${img_300}/${poster_path}` : unavailable} alt={title} />
      <div className="poster-info" style={{width: '95%'}}>
        <span className="vote"><span>{vote_average}</span></span>
        <div className="poster-title" style={{fontWeight: 'bold', width: '100%', marginTop: '15px'}}>{title}</div>
        <span style={{color: "#a9aeb0", paddingBottom: '10px'}}>{release_date}</span>
      </div>
    </div>
  )
}

export default SingleContent
