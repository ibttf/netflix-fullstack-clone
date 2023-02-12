import React, { useEffect, useState } from "react";
import MovieItem from "../components/MovieItem";
import "../styles/Search.css";

function Search() {
  const apiKey = "e738b0c021bcb38d799382dd3f2f81d6";
  const [searchTerm, setSearchTerm] = useState("");
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [ids,setIds]=useState([]);


  function handleChange(e) {
    setSearchTerm(e.target.value);
  }


  useEffect(() => {
    if (searchTerm) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchTerm}&page=1&include_adult=false`
      )
        .then((res) => res.json())
        .then((data) => setSearchedMovies(data.results));
    }
  }, [searchTerm]);
  useEffect(() => {
    fetch("/show-movies")
    .then((data) => data.json())
    .then((movies) => {

        let idArray=[];
        movies.map((movie)=>idArray.push(movie.movieId))
        setIds([...idArray]) 
    })
  }, []);

  return (
    <>
      <div className="search-bar-container">
        <input
          className="search-bar"
          placeholder={"Search for a movie or tv show"}
          onChange={handleChange}
        />
      </div>
      <div className="movie-grid-container">
        {searchedMovies.map((searchedMovie)=>
            {if (searchedMovie.backdrop_path){
            {return (<MovieItem movie={searchedMovie} ids={ids}></MovieItem>)}
            }}
            
        )}
      </div>

    </>
  );
}

export default Search;
