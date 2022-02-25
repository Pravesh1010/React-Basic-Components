import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import { Counter } from "./Counter";
import InfoIcon from "@mui/icons-material/Info";
import { IconButton } from "@mui/material";
import { useHistory } from "react-router-dom";



export function Movies(props) {
  const [display, setDisplay] = useState(false);

  const history = useHistory();
  const styles = {
    color: props.rating > 8.5 ? "green" : "red",
  };
  const discription_style = {
    display: "block",
  };

  return (
    <div className="movie-container">
      <img className="poster" src={props.poster} alt="poster"></img>
      <h1 className="movie-name">{props.name}</h1>
      <div className="genre-imdb">
        <h3 classname="genre">Genre: {props.genre} </h3>
        <h4 style={styles} className="imdb">
          IMDB: {props.rating}
        </h4>
      </div>
      <div className="discription-button">
        <Button variant="outlined" onClick={() => setDisplay(!display)}>
          Story plot
        </Button>
        
        <IconButton 
          color="primary"
          onClick={() => history.push(`/movies/${props.id}`)}
        >
          <InfoIcon />
        </IconButton>
      </div>
      {display && (
        <h6 style={discription_style} className="summary">
          {props.summary}
        </h6>
      )}
      <div className="counter-delete">
      <Counter />
      {props.deleteButton}
      {props.editIcon}
      </div>
    </div>
  );
}
