import React, { useState } from "react";
import "./style.css";
import MovieItem  from "./MovieItem";

import { Form, Input, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

//  import Movie from "./Movie";
function MoviesList({ movies, search, rating, setMovies }) {
  const [newMoive, setNewMovie] = useState({});

  return (
    <div className="movies-list ">
      <Form className=" form-add-movie">
        <Form.Group widths="equal">
          <div className="forms">
            <div>
              {" "}
              <label>Title:</label>
              <Form.Field
                id="form-input-control-first-name"
                control={Input}
                placeholder=" Title"
                onChange={(e) => {
                  setNewMovie({ ...newMoive, title: e.target.value });
                }}
              />
            </div>
            <div>
              <label>Url:</label>
              <Form.Field
                control={Input}
                placeholder=" Poster url"
                onChange={(e) => {
                  setNewMovie({ ...newMoive, posterUrl: e.target.value });
                }}
              />{" "}
            </div>
          </div>
          <div className="forms">
            <div>
              <label htmlFor="">rating</label>
              <Form.Field
                type="number"
                min={1}
                max={10}
                control={Input}
                placeholder=" Rating"
                onChange={(e) => {
                  setNewMovie({
                    ...newMoive,
                    rating: parseInt(e.target.value),
                  });
                }}
              />
            </div>
            <div>
              <label htmlFor="">description</label>
              <Form.Field
                control={Input}
                placeholder="Description"
                onChange={(e) => {
                  setNewMovie({ ...newMoive, description: e.target.value });
                }}
              />
            </div>
          </div>
        </Form.Group>
        <Button
          onClick={() => {
            setMovies([newMoive, ...movies]);
            let a = document.getElementsByTagName("input");
            for (let i = 0; i < a.length; i++) {
              a[i].value = "";
            }
          }}
        >
          Add
        </Button>
      </Form>

      <h1> Movies </h1>
      <div className=" movies-container">
        {movies
          .filter((movie) =>
            search
              ? movie.title.toLowerCase().trim().includes(search.toLowerCase())
              : movie
          )
          .filter((movie) => (rating ? movie.rating === rating : movie))

          .map((movie) => (
            <Link  key={movie.id} to={`movies/${movie.id}`}>
              <MovieItem props={movie} key={movie.id} />
            </Link>
          ))}
      </div>
    </div>
  );
}

export default MoviesList;
