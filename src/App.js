import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Movies from './components/movies/Movies';
import Details from './components/details/Details'
import Series from './components/series/Series';
import Search from './components/search/Search';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Movies />} />
          <Route path='/details' element={<Details />} />
          <Route path="/series" element={<Series />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
