import { useHistory } from "react-router-dom";

export function Log() {
  let history = useHistory();
  return (
    <div>
      <input type="text" placeholder="name" />
      <input type="text" placeholder="password" />
      <button onClick={() => history.push("/profile")}>Login</button>
    </div>
  );
}
