import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import MovieList from "../components/MovieList";
import Loading from "./Loading";
import "../styles/Browse.css"
const TVShows = () => {
        //API KEY
        const apiKey = "e738b0c021bcb38d799382dd3f2f81d6";

        //STATES FOR HERO
        const [movie, setMovie] = useState({});

        const [isLoading,setIsLoading]=useState(false);
        const [isToggle,setIsToggle]=useState(false);

        //STATES FOR SLIDERS
        const popularTVShows = `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&page=1&with_status=0&with_type=0`;
        const dramaTVShows = `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&page=2&timezone=America%2FNew_York&with_status=0&with_type=0`;
        const animationTVShows = `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_status=0&with_type=0&with_genres=16`;
        const comedyTVShows = `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_status=0&with_type=0&with_genres=35`;
        const crimeTVShows = `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_status=0&with_type=0&with_genres=80`;
        const soapTVShows = `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_status=0&with_type=0&with_genres=10766`;
        const kidsTVShows = `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_status=0&with_type=0&with_genres=10762`;
        const[ids,setIds]=useState([]);
        const [movieList,setMovieList]=useState([]);



        //HISTORY FOR LINKS
        const history = useHistory();


        
        useEffect(() => {
            setIsLoading(true);

            //FETCH TO GRAB RANDOM TRENDING MOVIE FOR HERO
            fetch(
            `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US&page=1`
            )
            .then((data) => data.json())
            .then((movies) => {

                setIsLoading(false);
                let random = parseInt(Math.random() * movies.results.length - 1);
                while (!movies.results[random].overview){
                    random = parseInt(Math.random() * movies.results.length - 1);
                }


                setMovie(movies.results[random]);

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
                    <h1 className="hero-title">{movie.name}</h1>
                    <h2 className="hero-description">{movie.overview ? movie.overview : ""}</h2>
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


            <h3 className="movie-group-classifier">Must Watch TV Shows</h3>
            <MovieList
            
                link={popularTVShows}
                ids={ids}
                setIsToggle={setIsToggle}
            ></MovieList>
            <h3 className="movie-group-classifier">Documentaries</h3>
            <MovieList
            
                link={dramaTVShows}
                ids={ids}
                setIsToggle={setIsToggle}
            ></MovieList>
            <h3 className="movie-group-classifier">Soap Operas</h3>
             <MovieList
            
                link={soapTVShows}
                ids={ids}
                setIsToggle={setIsToggle}
            ></MovieList>
            <h3 className="movie-group-classifier">Crime</h3>
             <MovieList
            
                link={crimeTVShows}
                ids={ids}
                setIsToggle={setIsToggle}
            ></MovieList>
            <h3 className="movie-group-classifier">Comedy</h3>
             <MovieList
            
                link={comedyTVShows}
                ids={ids}
                setIsToggle={setIsToggle}
            ></MovieList>
            <h3 className="movie-group-classifier">Kids Shows</h3>
             <MovieList
            
                link={kidsTVShows}
                ids={ids}
                setIsToggle={setIsToggle}
            ></MovieList>
            <h3 className="movie-group-classifier">Animations</h3>
             <MovieList
            
                link={animationTVShows}
                ids={ids}
                setIsToggle={setIsToggle}
            ></MovieList>
            </div>
        </div>
    );
}

export default TVShows;
