import { UsetSate, useState } from "react";
import "./App.css";
import MoviesList from "./component/MoviesList";
import NavBar from "./component/NavBar";
import { moviesData } from "./movies";
import { Routes, Route } from "react-router-dom";
import Moviecard from "./component/Moviecard";

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [search, setSearch] = useState("");
  const [rating, setrating] = useState(0);
  return (
    <>
      <div className="App">
        <NavBar setSearch={setSearch} setrating={setrating} rating={rating} />
        <Routes>
          <Route
            path="/"
            element={
              <MoviesList
                setMovies={setMovies}
                movies={movies}
                search={search}
                rating={rating}
              />
            }
          />
          <Route path="movies/:id" element={<Moviecard  movies={movies}/>} />
        </Routes>
      </div>
      <div className="shadow shadow1"></div>
      <div className="shadow shadow2"></div>
      <div className="shadow shadow3"></div>
      <div className="shadow shadow4"></div>
      <div className="shadow shadow5"></div>
      <div className="shadow shadow6"></div>
      <div className="shadow shadow7"></div>
      <div className="shadow shadow8"></div>
      <div className=" shadow shadow9"></div>
    </>
  );
}

export default App;
