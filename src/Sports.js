import { useState } from "react";
import { Counter } from "./Counter";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import EditIcon from "@mui/icons-material/Edit";
export function Sports({ picture, name, sport, country, info, deleteIcon }) {
  const [show, setShow] = useState(false);
  const infoStyle = {
    display: "block",
  };
  return (
    <div className="player-container">
      <img className="player-image" src={picture} alt="player picture"></img>
      <div className="player-details">
        <h3>{name}</h3>
        <h5>{sport}</h5>
        <h5>{country}</h5>
        {/* <button onClick={() => setShow(!show)}>Info</button> */}
        <div className="info-delete">
          <Button
            className="info-button"
            onClick={() => setShow(!show)}
            variant="contained"
            endIcon={<SendIcon />}
          ></Button>
          {deleteIcon}
        </div>

        {show && (
          <p style={infoStyle} className="info">
            {info}
          </p>
        )}
        <div className="counter-edit">
          <Counter />
          <Button endIcon={<EditIcon />}></Button>
        </div>
      </div>
    </div>
  );
}
