import React from "react";
import "./style.css";
import ReactStars from "react-stars";
import { CiUndo } from "react-icons/ci";

function NavBar({ setSearch, setrating, rating }) {
  const ratingChanged = (newRating) => {
    setrating(newRating);
  };

  return (
    <div className="nav-container">
      <h1 className="   Title"> Cinema Free </h1>
      <div style={{display:"flex",gap:"40px"}}>
        {" "}
        <ReactStars
          count={10}
          onChange={ratingChanged}
          size={30}
          value={rating}
          color2={"#ffd700"}
          color1="white"
          half={false}
        />
        <CiUndo
          size={25}
          onClick={() => {
            setrating(0);
            setSearch("");
          }}
          className="undo"
        />
      </div>
      <div className=" stars-box">
        <div className=" search-box">
          <input
            type="search"
            placeholder=" search"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
