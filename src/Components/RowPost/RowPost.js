import React, { useEffect, useState } from "react";
import "./RowPost.css";
import Youtube from "react-youtube";
import axios from "../../axios";
import { imageUrl, API_KEY } from "../../constants/constants";

function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState("");
  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((err) => {
        // alert("Network Error");
      });
  }, []);
  const opts = {
    height: "450",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovieTrailer = (id) => {
    axios
      .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        if (response.data.results.lenth !== 0) {
          setUrlId(response.data.results[0]);
        } else {
          console.log("Array Empty");
        }
      });
  };
  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj, index) => (
          <img
            onClick={() => handleMovieTrailer(obj.id)}
            className={props.isSmall ? "small-poster" : "poster"}
            key={index}
            src={`${imageUrl + obj.backdrop_path}`}
            alt=""
          />
        ))}
      </div>
      {urlId && <Youtube videoId={urlId.key} opts={opts} />}
    </div>
  );
}

export default RowPost;
