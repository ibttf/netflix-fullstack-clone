import React, {useState,useEffect} from "react";
import MovieItem from "../components/MovieItem";
import "../styles/MovieGrid.css";

function MovieGrid({ movieIds }) {
    const[ids,setIds]=useState([]);


    useEffect(()=>{
    fetch("/show-movies")
    .then((data) => data.json())
    .then((movies) => {

        let idArray=[];
        movies.map((movie)=>idArray.push(movie.movieId))
        setIds([...idArray]) 
    })


},[])


  if (movieIds) {
    movieIds = movieIds.filter((movieId) => {
      if (movieId.backdrop_path) {
        return true;
      }
      return false;
    });
  }

  return (
    <div
      className={`movie-grid-container`}
    >
      {movieIds ? (
        movieIds.map((movieId) => (
          <MovieItem key={movieId.id} ids={ids} />
        ))
      ) : (
        <></>
      )}
    </div>
  );
}

export default MovieGrid;
