import React, { useEffect, useState } from "react";
import { API_KEY, imageUrl } from "../../constants/constants";
import "./Banner.css";
import axios from "../../axios";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";

function Banner() {
  const [movie, setMovie] = useState();

  useEffect(() => {
    axios
      .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        const max = 19;
        let rand = Math.floor(Math.random() * (max + 1));
        let randomMovie = response.data.results[rand];
        if (randomMovie) {
          let overview = randomMovie.overview;
          if (overview.length <= 398) {
            setMovie(randomMovie);
          } else {
            let overviewArray = overview.match(/.{1,398}/g);
            overview = overviewArray[0] + "...";
            randomMovie["overview"] = overview;
            setMovie(randomMovie);
          }
        }
      });
  }, []);
  return (
    <div
      style={{
        backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})`,
      }}
      className="banner"
    >
      <div className="content">
        <h1 className="title">{movie ? movie.title : ""}</h1>
        <div className="banner-buttons">
          <button className="button">
            {" "}
            <i className="fa fa-play play-button"></i>Play
          </button>
          <button className="button">My List</button>
        </div>
        <h1 className="description">{movie ? movie.overview : ""}</h1>
      </div>
      <div className="fade-bottom"></div>
    </div>
  );
}

export default Banner;
