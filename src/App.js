import './App.css';
import { useEffect, useState } from 'react';
import MovieCard from './Components/MovieCard';

import './App.css';
import SearchIcon from '../src/search.svg';
const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=7fd2bc06";
const App = () => {

  const [searchtext,setsearchtext] = useState('');
  const [movies,setmovies] = useState(null);
  
  const SearchMovies = async (title) =>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setmovies(data.Search);
    }


  useEffect(() => {
    SearchMovies(searchtext)
  },[]);


  return (
    <div className="App">
      <h1>MovieLand</h1>
      <div className='search'>
        <input
        placeholder='Search For Movie'
        value={searchtext}
        onChange={(e) =>{
          setsearchtext(e.target.value)
        }}
        />
        <img
        src={SearchIcon}
        alt='Search'
        onClick={() => {
          SearchMovies(searchtext)
        }}
        />
      </div>
      <div className='container'>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
      
    </div>
    </div>
  );
}

export default App;