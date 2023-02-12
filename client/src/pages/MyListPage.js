import React, {useState,useEffect} from 'react';
import MovieItem from '../components/MovieItem';
import "../styles/Search.css"
const MyListPage = () => {
    const [ids,setIds]=useState([]);
    const [likedMovies,setLikedMovies]=useState([]);
    const apiKey = "e738b0c021bcb38d799382dd3f2f81d6";
    useEffect(()=>{
              fetch("/show-movies")
                .then((data) => data.json())
                .then((movies) => {

                    let idArray=[];
                    movies.map((movie)=>idArray.push(movie.movieId))
                    setIds([...idArray])
                    idArray.map((id)=>{
                        console.log(id);
                    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`)
                            .then(data=>data.json())
                            .then((realMovie)=>{
                                setLikedMovies([...likedMovies,{...realMovie}])
                        })
                        })
                    });

    },[])
    return (
        <div>
             <div className="movie-grid-container">
                {likedMovies.map((movie)=>{
                    return(<MovieItem movie={movie} ids={ids}/>)
                })}
             </div>
        </div>
    );
}

export default MyListPage;
