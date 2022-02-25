import { Movies } from "./Movies";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { API } from "./global";


export function MovieList() {
  const history = useHistory();
  const [movieList, setMovieList] = useState([]);


  const getMovies = () => {
    fetch(`${API}/movies`, {
      method: "GET",
    })
      .then((data) => data.json()) //response object
      .then((mvs) => setMovieList(mvs));
  }

  useEffect(() => getMovies(), []);

  const deleteMovie = ((id) => {
    fetch(`${API}/movies/${id}`,{
      method: "DELETE",
    }).then(() => getMovies());
  });


  return (
    <div className="movie-list">
      {movieList.map((mv, index) => (
        <Movies
          key={index}
          poster={mv.poster}
          name={mv.name}
          genre={mv.genre}
          rating={mv.rating}
          summary={mv.summary}
          id={mv.id}
          deleteButton={
            <IconButton
              style={{ marginLeft: "auto" }}
              aria-label="delete"
              color="error"
              onClick={() => deleteMovie(mv.id)}
            >
              <DeleteIcon />
            </IconButton>
          }
          editIcon={
            <IconButton
              aria-label="delete"
              color="secondary"
              onClick={() => history.push(`/movies/edit/${mv.id}`)}
            >
              <EditIcon />
            </IconButton>
          }
        />
      ))}
    </div>
  );
}
