import { useState } from "react";
import TextField from "@mui/material/TextField";
import { colors } from "@mui/material";

export function ColorBox() {
  const [color, setColor] = useState("");
  const styles = {
    backgroundColor: color,
  };
  return (
    <div className="main-colorbox">
      <div className="color-box" style={styles}>
        {color}
      </div>
      <TextField
        type="text"
        onChange={(event) => setColor(event.target.value)}
        label="Add color"
        varient="filled"
        color="success"
        focused
      />
    </div>
  );
}
