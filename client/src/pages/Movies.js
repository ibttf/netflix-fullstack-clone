import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import MovieList from "../components/MovieList";
import Loading from "./Loading";
import "../styles/Browse.css"
const Movies = () => {
        //API KEY
        const apiKey = "e738b0c021bcb38d799382dd3f2f81d6";

        //STATES FOR HERO
        const [movie, setMovie] = useState({});

        const [isLoading,setIsLoading]=useState(false);
        const [isToggle,setIsToggle]=useState(false);

        //STATES FOR MOVIE SLIDERS
        const trendingMovies = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=3`;
        const recentMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&include_video=true&page=1&primary_release_year=2022`;
        const adventureMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&include_video=true&page=1&with_genres=12`;
        const animationMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&include_video=true&page=1&with_genres=16`;
        const horrorMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=true&page=1&with_genres=27`;
      

        const[ids,setIds]=useState([]);
        const [movieList,setMovieList]=useState([]);
       

        //HISTORY FOR LINKS
        const history = useHistory();


        
        useEffect(() => {
            setIsLoading(true);

            //FETCH TO GRAB RANDOM TRENDING MOVIE FOR HERO
            fetch(
            `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=2`
            )
            .then((data) => data.json())
            .then((movies) => {
                setIsLoading(false);
                const random = parseInt(Math.random() * movies.results.length - 1);
                setMovie(movies.results[random]);

            });
            fetch(`https://api.themoviedb.org/3/genre/tv/list?api_key=e738b0c021bcb38d799382dd3f2f81d6&language=en-US`).then(data=>data.json()).then(console.log)

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
                    <h1 className="hero-title">{movie.title}</h1>
                    <h2 className="hero-description">{movie.overview}</h2>
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
                    src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                ></img>
            </div>

            {/* MOVIE SLIDERS */}
            <div id="MovieGroups">
            <h3 className="movie-group-classifier">Trending Movies</h3>
            <MovieList
            
                link={trendingMovies}
                ids={ids}
                setIsToggle={setIsToggle}
            ></MovieList>

    
            <h3 className="movie-group-classifier">Movies Released This Year</h3>
            <MovieList
            
                link={recentMovies}
                ids={ids}
                setIsToggle={setIsToggle}
            ></MovieList>

            <h3 className="movie-group-classifier">Adventure Movies</h3>
            <MovieList
            
                link={adventureMovies}
                ids={ids}
                setIsToggle={setIsToggle}
            ></MovieList>
            <h3 className="movie-group-classifier">Animation Movies</h3>
            <MovieList
            
                link={animationMovies}
                ids={ids}
                setIsToggle={setIsToggle}
            ></MovieList>
            <h3 className="movie-group-classifier">Horror Movies</h3>
            <MovieList
            
                link={horrorMovies}
                ids={ids}
                setIsToggle={setIsToggle}
            ></MovieList>
            </div>
        </div>
    );
}

export default Movies;
