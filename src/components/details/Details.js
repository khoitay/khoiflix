import React, {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import Header from "../Header";
import "./Details.css";
import { img_300, img_original } from "../config/config";
import { API_KEY } from "../config/config";
import Actor from "./Actor";

function Details() {
  const { state } = useLocation();
  const [cast, setCast] = useState([])
  const [video, setVideo] = useState({})

  useEffect(() => {
    fetchCast()
    fetchTrailer()
  }, [])

  const fetchTrailer = async() => {
    const respData = await fetch(`https://api.themoviedb.org/3/${state.type}/${state.id}/videos?api_key=${API_KEY}&language=en-US`)
    const data = await respData.json()
    if (data.results.length !== 0) {
      setVideo(data.results[0])
      return
    } 
    setVideo({key: 'dQw4w9WgXcQ'})
  }

  const fetchCast = async() => {
    const respData = await fetch(`https://api.themoviedb.org/3/${state.type}/${state.id}/credits?api_key=${API_KEY}&language=en-US`)
    const data = await respData.json()
    setCast(data.cast)
  }

  console.log(cast)

  return ( 
    <div>
      <Header />
      <div className="details-header">
        <div className="details-contentPath"></div>
        <div
          className="details-container"
          style={{
            background: `url("${img_original}/${state.backdrop_path}")`,
            backgroundSize: 'cover',
            backgroundPositionX: '200px'
          }}
        >
          <div className="details-poster">
            <img src={`${img_300}/${state.poster_path}`} alt="hello" />
          </div>
          <div className="film-introduce">
            <div className="film-introduce-header">
              <h1 style={{fontWeight: 'bold'}}>{state.title}</h1>
              <span>Release date: {state.release_date}</span>
            </div>
            <div className="details-order">
              <div className="vote">
                <div>{state.vote_average}</div>
              </div>
              <span style={{fontWeight: 'bold', marginLeft: '5px'}}>Vote<br/>Average</span>
            </div>
            <h4 style={{marginTop: '20px'}}>Overview</h4>
            <p>{state.overview}</p>
          </div>
        </div>
      </div>
      <div className="details-body">
          <div className="main">
            <h4 style={{marginLeft: '4%', marginBottom: '20px'}}>Top Billed Cast</h4>
            <div className="cast">
              {cast.map(item => {
                return <Actor
                  name={item.name}
                  image={item.profile_path}
                 />
              })}
            </div>
            <iframe src={`https://www.youtube.com/embed/${video.key}`} frameborder="0" ></iframe>
          </div>
          <div className="details-sidebar">
            <div className="sub-sidebar">
              <h5>Title</h5>
              <div>{state.title}</div>
            </div>
            <div className="sub-sidebar">
              <h5>Original Title</h5>
              <div>{state.original_title}</div>
            </div>
            <div className="sub-sidebar">
              <h5>Original Language</h5>
              <div>{state.original_language}</div>
            </div>
          </div>
      </div>
    </div>  
  );
}

export default Details;
