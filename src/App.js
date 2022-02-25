import "./App.css";
import { useState } from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";

import TextField from "@mui/material/TextField";
import { Switch, Route, Link, useHistory } from "react-router-dom";
import { TicTacToe } from "./TicTacToe.js";
import { MovieList } from "./MovieList";
import { About } from "./About";
import { Content } from "./Content";
import { ColorBox } from "./ColorBox";
import { Footer } from "./Footer";
import { PlayerList } from "./PlayerList";
import { MovieDetails } from "./MovieDetails";
import { AddMovie } from "./AddMovie";
import { EditMovie } from "./EditMovie";
import { AppBar, Toolbar } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

export default function App() {
  const initialmovieList = [
    {
      poster:
        "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2020/01/26/891223-thalapthy-vijay-vijay-sethupathi-master-third-look.jpg",
      name: "Master",
      genre: "Action",
      rating: 7.8,
      trailer: "https://youtu.be/1_iUFT3nWHk",
      summary:
        "John Durairaj, an alcoholic professor, gets enrolled to teach at a juvenile facility, unbeknownst to him. He soon clashes with a ruthless gangster, who uses the children as scapegoats for his crimes.",
    },
    {
      poster:
        "https://igimages.gumlet.io/tamil/home/fe-ovotvkaagrvh.jpg?w=376&dpr=2.6",
      name: "Maanadu",
      genre: "Action",
      rating: 8.7,
      trailer: "https://youtu.be/1_iUFT3nWHk",
      summary:
        "On the day of a public conference by the state's Chief Minister, his bodyguard and a police officer become stuck in a time loop.",
    },
    {
      poster: "https://miro.medium.com/max/548/1*Y8vXN1mJeEHyXWJtFICjiQ.jpeg",
      name: "The Pursuit Of Happyness",
      genre: "Drama",
      rating: 8,
      trailer: "https://youtu.be/1_iUFT3nWHk",
      summary:
        "Tired of Chris's professional failures, his wife decides to separate, leaving him financially broke with an unpaid internship in a brokerage firm and his son's custody to deal with.",
    },
    {
      poster:
        "https://cdn.shopify.com/s/files/1/1416/8662/products/titanic_1997_original_film_art_dd01271c-371c-4562-b9c2-0d3203301a66_1200x.jpg?v=1638474841",
      name: "Titanic",
      genre: "Romance",
      rating: 7.8,
      trailer: "https://youtu.be/1_iUFT3nWHk",
      summary:
        "Seventeen-year-old Rose hails from an aristocratic family and is set to be married. When she boards the Titanic, she meets Jack Dawson, an artist, and falls in love with him.",
    },
  ];

  const [movieList, setMovieList] = useState(initialmovieList);

  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "Item1",
    },
    {
      id: 2,
      checked: false,
      item: "Item2",
    },
    {
      id: 3,
      checked: false,
      item: "Item3",
    },
    {
      id: 4,
      checked: false,
      item: "Item4",
    },
  ]);

  const handleClick = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
  };

  const initialplayerList = [
    {
      picture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCdf0zV-gGOy_i8TKy_jn0QmD_rVvMN0EeEw&usqp=CAU",
      name: "MS Dhoni",
      sport: "Cricker",
      country: "India",
      info: "Mahendra Singh Dhoni, is a former international cricketer who captained the Indian national cricket team in limited-overs formats from 2007 to 2017 and in Test cricket from 2008 to 2014. He is currently the captain of Chennai Super Kings, a franchise based team of Indian Premier League.",
    },
    {
      picture:
        "https://i.guim.co.uk/img/media/3ac08eca5dbb8d119df3ae9da213924c0db74527/0_31_3111_1867/master/3111.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=3e35baa1966b4580757d0a13f633a851",
      name: "Ronaldo",
      sport: "Football",
      country: "Portugal",
      info: "Cristiano Ronaldo dos Santos Aveiro GOIH ComM is a Portuguese professional footballer who plays as a forward for Premier League club Manchester United and captains the Portugal national team.",
    },
    {
      picture:
        "https://tennishead.net/wp-content/uploads/2022/01/NADAL-AUSTRALIAN-OPEN-30012022-1238-Edited.jpg",
      name: "Rafael Nadal",
      sport: "Tennis",
      country: "Spain",
      info: "Rafael Nadal Parera is a Spanish professional tennis player. He is ranked world No. 5 by the Association of Tennis Professionals, has been ranked No. 1 for 209 weeks, and has finished as the year-end No. 1 five times. Nadal has won 21 Grand Slam men's singles titles, the most in history.",
    },
    {
      picture:
        "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2021/09/29/998586-961270-virat-kohli.jpg",
      name: "Virat Kohli",
      sport: "Cricker",
      country: "India",
      info: "Virat Kohli is an Indian international cricketer and former captain of the Indian national team. He plays for Delhi in domestic cricket and Royal Challengers Bangalore in the Indian Premier League as a right-handed batsman.",
    },
  ];

  const [playerList, setPlayerList] = useState(initialplayerList);
  const [playerPicture, setPlayerPicture] = useState("");
  const [playerName, setPlayerName] = useState("");
  const [playerSport, setPlayerSport] = useState("");
  const [playerCountry, setPlayerCountry] = useState("");

  const history = useHistory();

  const [mode, setMode] = useState("dark");
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ borderRadius: "0px", minHeight: "100vh" }} elevation={3}>
        <div className="App">
          <AppBar position="static">
            <Toolbar>
              <Button color="inherit" onClick={() => history.push("/")}>
                Home
              </Button>
              <Button color="inherit" onClick={() => history.push("/about")}>
                About
              </Button>
              <Button color="inherit" onClick={() => history.push("/movies")}>
                Movies
              </Button>
              <Button
                color="inherit"
                onClick={() => history.push("/add-movie")}
              >
                Add Movie
              </Button>
              <Button
                color="inherit"
                onClick={() => history.push("/tictactoe")}
              >
                Tic Tac Toe
              </Button>
              <Button color="inherit" onClick={() => history.push("/content")}>
                Content
              </Button>
              <Button
                color="inherit"
                onClick={() => history.push("/color-box")}
              >
                Color Box
              </Button>
              <Button color="inherit" onClick={() => history.push("/sports")}>
                Sports Icons
              </Button>
              <Button
                style={{ marginLeft: "auto" }}
                color="inherit"
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
              >
                {mode === "light" ? "dark" : "light"} Mode
              </Button>
            </Toolbar>
          </AppBar>

          {/* Switch Route    */}

          <Switch>
            <Route path="/about">
              <About />
              <ToDo />
            </Route>
            <Route path="/movies/edit/:id">
              <EditMovie />
            </Route>
            <Route path="/movies/:id">
              <MovieDetails />
            </Route>

            <Route path="/movies">
              <MovieList />
            </Route>
            <Route path="/add-movie">
              <AddMovie />
            </Route>
            <Route path="/tictactoe">
              <TicTacToe />
            </Route>
            <Route path="/content">
              <Content
                items={items}
                handleClick={handleClick}
                handleDelete={handleDelete}
              />
              <Footer length={items.length} />
            </Route>
            <Route path="/sports">
              <div className="add-player">
                <TextField
                  type="text"
                  onChange={(event) => setPlayerPicture(event.target.value)}
                  label="Picture"
                  varient="filled"
                  color="success"
                  focused
                />
                <TextField
                  type="text"
                  onChange={(event) => setPlayerName(event.target.value)}
                  label="Name"
                  varient="filled"
                  color="success"
                  focused
                />
                <TextField
                  type="text"
                  onChange={(event) => setPlayerSport(event.target.value)}
                  label="Sport"
                  varient="filled"
                  color="success"
                  focused
                />
                <TextField
                  type="text"
                  onChange={(event) => setPlayerCountry(event.target.value)}
                  label="Country"
                  varient="filled"
                  color="success"
                  focused
                />
                <Button
                  onClick={() => {
                    const nPlayer = {
                      picture: playerPicture,
                      name: playerName,
                      sport: playerSport,
                      country: playerCountry,
                    };
                    setPlayerList([...playerList, nPlayer]);
                  }}
                  variant="contained"
                  color="success"
                >
                  Add Player
                </Button>
              </div>
              <PlayerList
                playerList={playerList}
                setPlayerList={setPlayerList}
              />
            </Route>
            <Route path="/color-box">
              <ColorBox />
            </Route>
            <Route path="**">404 NOT FOUND</Route>
          </Switch>
        </div>
      </Paper>
    </ThemeProvider>
  );
}

// To-Do App

function ToDo(){
  const addTask = (text) => updateTask([...tasks, {text}]);
  const [tasks, updateTask] = useState([
    {
      text: "Morning Workout",
      isCompleted: false
    },
    {
      text: "Cold Shower",
      isCompleted: false
    },
    {
      text: "High Protein breakfast",
      isCompleted: false
    },
  ])

  const toggleTask = (index) => {
    const newTask = [...tasks];
    newTask[index].isCompleted ? newTask[index].isCompleted=false : newTask[index].isCompleted=true;
    updateTask(newTask);
  }

  const deleteTask = (index) => {
    const newTask = [...tasks];
    newTask.splice(index, 1);
    updateTask(newTask);
  }
  return <div className="list-of-task-todo">
        <Addtask addTask={addTask}/>

    {tasks.map((task, index) => (
      <div className="task-status">
        <span onClick={() => toggleTask(index)} className={task.isCompleted ? "task-name completed-task" : "task-name"}>
        {task.text}
        </span>
        <IconButton
              aria-label="delete"
              color="error"
              onClick={() => deleteTask(index)}
            >
              <DeleteIcon />
            </IconButton>
      </div>
    ))}

  </div>
}

// add task

function Addtask({addTask}){
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(value !== ""){
      addTask(value)
      setValue("");
    }
  }

  return <div className="list-of-task-todo">
    <form onSubmit={handleSubmit}>
    <TextField
        value={value}
        type="text"
        onChange={(event) => setValue(event.target.value)}
        label="Add task"
        varient="filled"
        color="success"
        focused
      />
      <Button type="submit">Add</Button>
    </form>
  </div>
}