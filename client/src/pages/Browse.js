import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import MovieList from "../components/MovieList";

import Loading from "./Loading";
import "../styles/Browse.css"
const Browse = () => {
        //API KEY
        const apiKey = "e738b0c021bcb38d799382dd3f2f81d6";

        //STATES FOR HERO
        const [movie, setMovie] = useState({});
        const [title, setTitle] = useState("");
        const [description, setDescription] = useState("");
        const [image, setImage] = useState("");
        const [ranking, setRanking] = useState(0);
        const [isLoading,setIsLoading]=useState(false);


        //STATES FOR MOVIE SLIDERS
        const trendingMovies = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=3`;
        const recentMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&include_video=true&page=1&primary_release_year=2022`;
        const adventureMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&include_video=true&page=1&with_genres=12`;
        const animationMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&include_video=true&page=1&with_genres=16`;
        const popularTVShows = `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&page=1&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`;
        const dramaTVShows = `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&page=2&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0&with_genre=18`;
        const horrorMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=true&page=1&with_genres=27`;
    
        const [myList, setMyList] = useState([]);  


        //ID ARRAY TO COLLECT SPECIFICALLY THE IDS OF CURRENT PROFILE'S LIKED MOVIES
        let idArray=[];


        //HISTORY FOR LINKS
        const history = useHistory();


        
        useEffect(() => {
            setIsLoading(true);

            //FETCH TO GRAB RANDOM TRENDING MOVIE FOR HERO
            fetch(
            `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`
            )
            .then((data) => data.json())
            .then((movies) => {
                setIsLoading(false);
                const random = parseInt(Math.random() * movies.results.length - 1);
                setMovie(movies.results[random]);
                setRanking(random + 1);
                setTitle(movies.results[random].title);
                setDescription(movies.results[random].overview);
                setImage(movies.results[random].backdrop_path);
            });
            //FETCH TO GRAB MY LIKED MOVIES
              fetch("/show-movies")
                .then((data) => data.json())
                .then((movies) => {
                    console.log(movies);
                    // setMyList(movies)
                    movies.map((movie)=>idArray.push(movie.id))
                });

        }, []);

        function handleMoreInfoClick() {
            history.replace(`/${movie.id}`);
        }


    if(isLoading){
        return <Loading />
    }
    return (
        <div className="browse">
          {/* HERO */}
            <div id="Hero">
                <div className="hero-text">
                    <h1 className="hero-title">{title}</h1>
                    <h2 className="hero-description">{description}</h2>
                    <h3 className="hero-popularity">#{ranking} in Movies Today</h3>
                    <button className="play-button">
                    <FontAwesomeIcon icon={faPlay} className="icon hero-icon" />
                    Play
                    </button>
                    <button className="more-info-button" onClick={handleMoreInfoClick}>
                    <FontAwesomeIcon icon={faCircleInfo} className="icon hero-icon" />
                    More Info
                    </button>
                </div>
                <img
                    className="hero-image"
                    src={`https://image.tmdb.org/t/p/original/${image}`}
                ></img>
            </div>

            {/* MOVIE SLIDERS */}
            <div id="MovieGroups">
            <h3 className="movie-group-classifier">Trending Movies</h3>
            <MovieList
            
                link={trendingMovies}
                myList={myList}
                ids={idArray}
            ></MovieList>

            <h3 className="movie-group-classifier">My List</h3>
            {/* THIS ONE IS FOR MY LIKED MOVIES, NOT JUST A COLLECTION OF TRENDING ONES */}
            {/* <MovieList
            
                movies={myList}
                ids={idArray}
            ></MovieList> */}

            <h3 className="movie-group-classifier">Movies Released This Year</h3>
            <MovieList
            
                link={recentMovies}
                myList={myList}
                ids={idArray}
            ></MovieList>

            <h3 className="movie-group-classifier">Adventure Movies</h3>
            <MovieList
            
                link={adventureMovies}
                myList={myList}
                ids={idArray}
            ></MovieList>
            <h3 className="movie-group-classifier">Animation Movies</h3>
            <MovieList
            
                link={animationMovies}
                myList={myList}
                ids={idArray}
            ></MovieList>
            <h3 className="movie-group-classifier">Must Watch TV Shows</h3>
            <MovieList
            
                link={popularTVShows}
                myList={myList}
                ids={idArray}
            ></MovieList>
            <h3 className="movie-group-classifier">Dramatic TV Shows</h3>
            <MovieList
            
                link={dramaTVShows}
                myList={myList}
                ids={idArray}
            ></MovieList>
            <h3 className="movie-group-classifier">Horror Movies</h3>
            <MovieList
            
                link={horrorMovies}
                myList={myList}
                ids={idArray}
            ></MovieList>
            </div>
        </div>
    );
}

export default Browse;
