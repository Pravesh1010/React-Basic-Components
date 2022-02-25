import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useHistory } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useParams } from "react-router-dom";
import { API } from "./global";
import { useEffect } from "react";

export function EditMovie() {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`${API}/movies/${id}`, {
      method: "GET",
    })
      .then((data) => data.json()) //response object
      .then((mv) => setMovie(mv));
  }, []);
  console.log(movie);

  return <div>{movie ? <EditMovieForm movie={movie} /> : "Loading"}</div>;
}

function EditMovieForm({ movie }) {
  const history = useHistory();

  const [name, setName] = useState(movie.name);
  const [poster, setPoster] = useState(movie.poster);
  const [rating, setRating] = useState(movie.rating);
  const [summary, setSummary] = useState(movie.summary);
  const [genre, setGenre] = useState(movie.genre);
  const [trailer, setTrailer] = useState(movie.trailer);

  return (
    <div className="add-movie-form">
      <TextField
        value={name}
        type="text"
        onChange={(event) => setName(event.target.value)}
        label="Name"
        varient="filled"
        color="success"
        focused
      />
      <TextField
        value={poster}
        type="text"
        onChange={(event) => setPoster(event.target.value)}
        label="Poster"
        varient="filled"
        color="success"
        focused
      />
      <TextField
        value={rating}
        type="text"
        onChange={(event) => setRating(event.target.value)}
        label="Rating"
        varient="filled"
        color="success"
        focused
      />
      <TextField
        value={genre}
        type="text"
        onChange={(event) => setGenre(event.target.value)}
        label="Genre"
        varient="filled"
        color="success"
        focused
      />
      <TextField
        value={summary}
        type="text"
        onChange={(event) => setSummary(event.target.value)}
        label="Summary"
        varient="filled"
        color="success"
        focused
      />
      <TextField
        value={trailer}
        type="text"
        onChange={(event) => setTrailer(event.target.value)}
        label="Trailer"
        varient="filled"
        color="success"
        focused
      />
      <Button
        onClick={() => {
          const updatedMovie = {
            name: name,
            poster: poster,
            rating: rating,
            summary: summary,
            genre: genre,
            trailer: trailer,
          };
          fetch(`${API}/movies/${movie.id}`, {
            method: "PUT",
            body: JSON.stringify(updatedMovie),
            headers: {
              "content-type": "application/json",
            },
          }).then(() => history.push("/movies"));
        }}
        variant="contained"
        color="success"
      >
        Save
      </Button>
      <Button
        onClick={() => history.goBack()}
        variant="contained"
        startIcon={<ArrowBackIosIcon />}
      >
        Back
      </Button>
    </div>
  );
}
