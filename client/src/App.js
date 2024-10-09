import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [movies , setMovies] = useState([])
  useEffect(() =>{
    fetch("/movies")
    .then((r) => r.json())
    .then((movies) => setMovies(movies))
  },[])
  const mov = movies.map((movie)=>{
    return <h3>{movie.title}</h3>
  })
  return (
    <div className="App">
     <h1>Check the console for a list of movies!</h1>
      {mov}
    </div>
  );
}

export default App;
