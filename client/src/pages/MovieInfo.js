import { useState, useEffect } from "react";
import "../styles/MovieInfo.css";
import MovieList from "../components/MovieList";
function MovieInfo({ apiKey }) {


  const [movie, setMovie] = useState({});
  const [cast, setCast] = useState([]);
  const [videoIds, setVideoIds] = useState([]);
  const [ids,setIds]=useState([]);
  const [movieId,setMovieId]=useState("")
  const [recommendedMovies,setRecommendedMovies]=useState("");


  useEffect(() => {

    //sets the movieId based on the url
        const url = window.location.href;
        let urlChars=url.split("");
        let newUrl=[];
        for (let i=urlChars.length-1;i>=0;i--){
            if (urlChars[i]==="/"){
                break;
            }
            newUrl.unshift(urlChars[i])
        }
        newUrl=newUrl.join("");
        setMovieId(newUrl);
        setRecommendedMovies(`https://api.themoviedb.org/3/movie/${newUrl}/recommendations?api_key=${apiKey}&language=en-US&page=1`);
        console.log(newUrl,apiKey)
        fetch(`https://api.themoviedb.org/3/movie/${newUrl}/recommendations?api_key=${apiKey}&language=en-US&page=1`).then(data=>data.json()).then((results)=>console.log(results,"helo"))
    //FETCH TO GET IDS OF LIKED MOVIES
     fetch("/show-movies")
        .then((data) => data.json())
        .then((likedMovies) => {

            let idArray=[];
            likedMovies.map((movie)=>idArray.push(movie.newUrl))
            setIds([...idArray])
            
           
    });
    //FETCH TO GET THE DATA FOR THE MOVIE WE'RE ON
    fetch(
      `https://api.themoviedb.org/3/movie/${newUrl}?api_key=${apiKey}&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
      });
    //FETCH TO GET CREDITS FOR THE MOVIE WE'RE ON
    fetch(
      `https://api.themoviedb.org/3/movie/${newUrl}/credits?api_key=${apiKey}&language=en-US`
    )
      .then((data) => data.json())
      .then((data) => {
        setCast(data.cast);
      });
    //FETCH TO GET VIDEOS FOR THE MOVIE WE'RE ON
    fetch(
        `https://api.themoviedb.org/3/movie/${newUrl}/videos?api_key=${apiKey}&language=en-US`
        )
        .then((res) => res.json())
        .then((data) => {
            if (data.results) {
            setVideoIds(data.results);
            }
      });

  }, []);


    function renderVideoUrl(videoObj) {
    if (videoObj.site === "YouTube") {
      return `https://www.youtube.com/embed/${videoObj.key}`;
    } else if (videoObj.site === "Vimeo") {
      return `https://www.vimeo.com/${videoObj.key}`;
    }
  }


    return (

      <div className="movie-info-page">
        {/* HERO SECTION */}
        <div className="hero-image-more-container">
          <img
            className="hero-info-image"
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            alt="No Picture available at this time"
          />
        </div>

          <div>
            <img
              className="hero-poster"
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            ></img>
          </div>
          <div className="hero-text more-movie-info">
            <h1 className="hero-title">
              {movie.title} ({movie.release_date ? movie.release_date.slice(0, 4) : ""})


            </h1>
            <div className="hero-description">
              <div className="genres-container">
                {movie.genres? movie.genres.map((genre) => {
                  return <span className="hero-genre">{genre.name}</span>;
                }): ""}
              </div>
            </div>
            <h3 className="hero-description">{movie.overview}</h3>
            <h2 className="hero-description cast-name-title">Cast</h2>
            <div className="cast-actors-container">
              {cast.slice(0, 5).map((castObj) => {
                return (
                  <div className="cast-actor">
                    <img
                      className="actor-img"
                      src={`https://image.tmdb.org/t/p/original/${castObj.profile_path}`}
                    />
                    <h3 className="actor-title">{castObj.name}</h3>
                  </div>
                );
              })}
            </div>
          </div>

        <div className="movie-videos-container">
        {videoIds ? (
            videoIds.slice(0, 5).map((videoObj) => {
            return (
                <div className="movie-video">
                <h2 className="movie-video-title">{videoObj.name}</h2>
                <iframe
                    className="movie-info-trailer"
                    src={renderVideoUrl(videoObj)}
                    controls="controls"
                ></iframe>
                </div>
            );
            })
        ) : (
            <h2>GOODBYE</h2>
        )}
        </div>

        <h3 className="recommended-movies-title">More Like This: </h3>
            <MovieList
            link={recommendedMovies}
            ids={ids}
            ></MovieList>
      </div>
    );

}

export default MovieInfo;
