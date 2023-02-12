import React, { useEffect, useState } from "react";
import MovieItem from "./MovieItem";
import "../styles/MovieList.css";

function MovieList({ link, ids }) {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    fetch(link)
      .then((data) => data.json())
      .then((popularMovies) => {
        //movieList state is going to be the results of the 20 objects sent by fetching link

        setMovieList(popularMovies.results);

      });
  }, []);

  function handleSlideClick(e) {
    if (
      e.target.className.includes("left") &&
      parseInt(
        getComputedStyle(e.target.nextSibling).getPropertyValue(
          "--slider-index"
        )
      )
    ) {
      const slider = e.target.nextSibling;
      const sliderIndex = parseInt(
        getComputedStyle(slider).getPropertyValue("--slider-index")
      );
      slider.style.setProperty("--slider-index", sliderIndex - 1);
    } else if (e.target.className.includes("right")) {
      const slider = e.target.previousSibling;
      const sliderIndex = parseInt(
        getComputedStyle(slider).getPropertyValue("--slider-index")
      );
      slider.style.setProperty("--slider-index", sliderIndex + 1);
    }
  }

  return (
    <div className="movie-list-container">
      <div className="handle left-handle" onClick={handleSlideClick}>
        &#8249;
      </div>


      <div className={`slider`}>
        {movieList? movieList.map((movie) => {
          if (!movie.poster_path || !movie.backdrop_path) {
            return;
          }
          movie = { ...movie, watched: false };
          return (
            <MovieItem
              key={movie.id}
              movie={movie}
              ids={ids}
            ></MovieItem>
          );
        }) : <div>Sorry, no movies available at this time.</div>}
      </div>


      <div className="handle right-handle" onClick={handleSlideClick}>
        &#8250;
      </div>
    </div>
  );
}

export default MovieList;
