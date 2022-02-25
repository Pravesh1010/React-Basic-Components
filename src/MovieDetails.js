// import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useParams } from "react-router-dom";

import { useState, useEffect } from "react";
import { API } from "./global";
export function MovieDetails() {
  const { id } = useParams();

  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetch(`${API}/movies/${id}`, {
      method: "GET",
    })
      .then((data) => data.json()) //response object
      .then((mv) => setMovie(mv));
  }, []);


  return (
    <div className="movie-container">
      <iframe
        width="900"
        height="506"
        src={movie.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <img className="poster" src={movie.poster} alt="poster"></img>
      <h1 className="movie-name">{movie.name}</h1>
      <div className="genre-imdb">
        <h3 classname="genre">Genre: {movie.genre} </h3>
        <p>Rating: {movie.rating}</p>
      </div>
      <p>{movie.summary}</p>
    </div>
  );
}
