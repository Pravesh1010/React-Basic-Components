import { Sports } from "./Sports";
// import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export function PlayerList({ playerList, setPlayerList }) {
  return (
    <div className="player-component">
      {playerList.map((player, index) => (
        <Sports
          key={index}
          picture={player.picture}
          name={player.name}
          sport={player.sport}
          country={player.country}
          info={player.info}
          deleteIcon={
            <Button
              variant="contained"
              endIcon={<DeleteIcon />}
              onClick={() => {
                const copyPlayerList = [...playerList];
                copyPlayerList.splice(index, 1);
                setPlayerList(copyPlayerList);
              }}
            />
          }
        />
      ))}
    </div>
  );
}
