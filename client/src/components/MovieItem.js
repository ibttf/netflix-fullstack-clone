import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../styles/MovieItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPlus,
  faPause,
  faAngleDown,
  faX,
  faThumbsUp,
  faThumbsDown,
} from "@fortawesome/free-solid-svg-icons";


function MovieItem({
  movie,
  inMyList,
  onAddDeleteClick,
  isOutsideButInMyList,
}) {
  const name = movie.title ? movie.title : movie.name;
  const image = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;
  const history = useHistory();

  const movieCODES = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Science Fiction",
    10770: "TV Movie",
    53: "Thriller",
    10752: "War",
    37: "Western",
  };

  const tvCODES = {
    10759: "Action and Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    10762: "Kids",
    9648: "Mystery",
    10763: "News",
    10764: "Reality",
    10765: "Sci-Fi and Fantasy",
    10766: "Soap",
    10767: "Talk",
    10768: "War and Politics",
    37: "Western",
  };

  const [isPlaying, setIsPlaying] = useState(false);


  //will either send a post or delete request to take away/or add to my list
  function handleMyListClick(e) {
    // console.log(e.currentTarget);
    // if (e.currentTarget && e.currentTarget.className.includes("add")) {
    //   fetch("http://localhost:8000/movies", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(movie),
    //   }).then((data) => data.json());
    // } else {
    //   fetch(`http://localhost:8000/movies/${movie.id}`, {
    //     method: "DELETE",
    //   }).then((data) => data.json());
    // }
  }


  //function to check whether a movie should be showing as like or remove like
  function renderAddDeleteButton() {
    if (inMyList) {
      //if it is already in the list

      return [faX, "delete-button"];
    } else {
      //if it is not already in the list
      if (isOutsideButInMyList) {
        //it's outside the list, but an element that you'd added to the list

        return [faX, "delete-button"];
      } else {
        //it's outside the list and you hadn't added it to the list yet

        return [faPlus, "add-button"];
      }
    }
  }

  function handleMoreInfoClick() {
    //ADD THE POP UP HERE!!!
    console.log(history);
    history.replace(`/${movie.id}`);
  }

  const [isLiked, setIsLiked] = useState(false);

  function handleLikeClick() {
    setIsLiked(!isLiked);
    //ADD THE PATCH REQUEST HERE OR DO SOMETHING WITH THIS
  }
  function renderLikeDislike() {
    if (isLiked) {
      return faThumbsDown;
    }
    return faThumbsUp;
  }




  return (
    <div className="movie-poster">
      <img src={image} className="movie-poster-img"></img>

      <div className="display">
        <button className="card-button play">
          <FontAwesomeIcon icon={faPlay}></FontAwesomeIcon>
        </button>
        <button
          className={`card-button ${
            renderAddDeleteButton()[1]
          } handle-list-button`}
          onClick={(e) => {
            handleMyListClick(e);
            onAddDeleteClick();
          }}
        >
          <FontAwesomeIcon icon={renderAddDeleteButton()[0]}></FontAwesomeIcon>
        </button>
        <button className="card-button" onClick={handleLikeClick}>
          <FontAwesomeIcon icon={renderLikeDislike()}></FontAwesomeIcon>
        </button>


        <button
          className="card-button angle-down-button"
          onClick={handleMoreInfoClick}
        >
          <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
        </button>
        <p className="movie-name">{name}</p>
        <div className="genres-container">
          {movie.genre_ids !== undefined
            ? movie.genre_ids.slice(0, 3).map((id, index) => {
                if (index !== movie.genre_ids.slice(0, 3).length - 1) {
                  return <p className="genre">{movieCODES[id] + " ● "}</p>;
                } else {
                  return <p className="genre">{movieCODES[id]}</p>;
                }
              })
            : movie.genres.slice(0, 3).map((obj, index) => {
                if (index !== movie.genres.slice(0, 3).length - 1) {
                  return <p className="genre">{obj.name + " ● "}</p>;
                } else {
                  return <p className="genre">{obj.name}</p>;
                }
              })}
        </div>
      </div>
    </div>
  );
}

export default MovieItem;
