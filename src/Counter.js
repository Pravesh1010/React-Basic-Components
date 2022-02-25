import { useState } from "react";
import Button from "@mui/material/Button";


export function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDisLike] = useState(0);
  return (
    <div className="like-dislike">
      <Button
        variant="contained"
        size="small"
        onClick={() => setLike(like + 1)}
      >
        Like {like}
      </Button>
      <Button
        variant="contained"
        size="small"
        onClick={() => setDisLike(dislike + 1)}
      >
        Dislike {dislike}
      </Button>
    </div>
  );
}
