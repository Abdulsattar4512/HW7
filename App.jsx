import React from "react";
import RandomVerse from "./RandomVerse";
import SpecificVerse from "./SpecificVerse";

function App() {
  return (
    <div className="App">
      <h1>Bible Verse Finder</h1>
      <RandomVerse />
      <SpecificVerse />
    </div>
  );
}

export default App;
