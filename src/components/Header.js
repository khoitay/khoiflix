import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{background: "#032541", fontWeight: '600'}}>
      <Link to="/" className="navbar-brand text-primary">KHOIFLIX</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link to="/" className="nav-link active ml-3">Movies<span class="sr-only">(current)</span></Link>
          <Link to="/series" className="nav-link active ml-3" href="#">Tv Shows</Link>
          <Link to="/search" className="nav-link active ml-3" href="#">Search</Link>
        </div>
      </div>
    </nav>
  )
}

export default Header
