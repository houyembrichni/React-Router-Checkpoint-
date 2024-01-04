import React from "react";
import { Link } from "react-router-dom";

import ReactStars from "react-stars";
function MovieItem({ props }) {
  let { title, posterUrl, description, rating } = props;
  return (
    <div className="movie-item">
      <div
        className="movie-item-cover"
        style={{ backgroundImage: ` url(${posterUrl})` }}
      ></div>

      <div className="movie-item-container">
        <h1> {title}</h1>
        <p> {description}</p>

        <div>
          <div>
            <ReactStars
              count={10}
              size={25}
              color2={"#ffd700"}
              half={false}
              edit={false}
              value={rating}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieItem;
