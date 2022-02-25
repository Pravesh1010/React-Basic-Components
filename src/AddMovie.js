import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useHistory } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { API } from "./global";

export function AddMovie() {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [genre, setGenre] = useState("");
  const [trailer, setTrailer] = useState("");

  const history = useHistory();

  return (
    <div className="add-movie-form">    
      <TextField
        type="text"
        onChange={(event) => setName(event.target.value)}
        label="Name"
        varient="filled"
        color="success"
        focused
      />
      <TextField
        type="text"
        onChange={(event) => setPoster(event.target.value)}
        label="Poster"
        varient="filled"
        color="success"
        focused
      />
      <TextField
        type="text"
        onChange={(event) => setRating(event.target.value)}
        label="Rating"
        varient="filled"
        color="success"
        focused
      />
      <TextField
        type="text"
        onChange={(event) => setGenre(event.target.value)}
        label="Genre"
        varient="filled"
        color="success"
        focused
      />
      <TextField
        type="text"
        onChange={(event) => setSummary(event.target.value)}
        label="Summary"
        varient="filled"
        color="success"
        focused
      />
      <TextField
        type="text"
        onChange={(event) => setTrailer(event.target.value)}
        label="Trailer"
        varient="filled"
        color="success"
        focused
      />
      <Button
        onClick={() => {
          const nMovie = {
            name: name,
            poster: poster,
            rating: rating,
            summary: summary,
            genre: genre,
            trailer: trailer,
          };

          fetch(`${API}/movies/`, {
            method: "POST",
            body: JSON.stringify(nMovie),
            headers: {
              "content-type": "application/json",
            },
          }).then(() => history.push("/movies"));

        //   history.push("/movies");
        }}
        variant="contained"
        color="success"
      >
        Add movie
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
