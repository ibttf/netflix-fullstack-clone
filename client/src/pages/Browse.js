import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faCircleInfo } from "@fortawesome/free-solid-svg-icons";

import "../styles/Browse.css"
const Browse = () => {
        const apiKey = "e738b0c021bcb38d799382dd3f2f81d6";
        const [movie, setMovie] = useState({});
        const [title, setTitle] = useState("");
        const [description, setDescription] = useState("");
        const [image, setImage] = useState("");
        const [ranking, setRanking] = useState(0);


        const history = useHistory();
        useEffect(() => {
            fetch(
            `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`
            )
            .then((data) => data.json())
            .then((movies) => {
                const random = parseInt(Math.random() * movies.results.length - 1);
                console.log(movies.results[random]);
                setMovie(movies.results[random]);
                setRanking(random + 1);
                setTitle(movies.results[random].title);
                setDescription(movies.results[random].overview);
                setImage(movies.results[random].backdrop_path);
            });
        }, []);

        function handleMoreInfoClick() {
            history.replace(`/${movie.id}`);
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
        </div>
    );
}

export default Browse;
