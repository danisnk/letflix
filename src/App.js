import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import "./App.css";
import {
  originals,
  actions,
  comedy,
  horror,
  romance,
  documentary,
  animation,
  scienceFiction,
  history,
  thriller,
  drama,
  crime,
  mystery,
} from "./urls";
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={originals} title="Netflix Originals" />
      <RowPost url={actions} title="Actions" isSmall />
      <RowPost url={comedy} title="Comedy" isSmall />
      <RowPost url={romance} title="Romance" isSmall />
      <RowPost url={documentary} title="Documentary" isSmall />
      <RowPost url={mystery} title="Mystery" isSmall />
      <RowPost url={thriller} title="Thriller" isSmall />
      <RowPost url={drama} title="drama" isSmall />
      <RowPost url={history} title="History" isSmall />
      <RowPost url={crime} title="Crime" isSmall />
      <RowPost url={scienceFiction} title="Sci-Fi" isSmall />
      <RowPost url={animation} title="Animation" isSmall />
      <RowPost url={horror} title="Horror" isSmall />
    </div>
  );
}

export default App;
