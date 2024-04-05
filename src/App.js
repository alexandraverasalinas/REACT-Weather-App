import React from "react";
import Weather from "./Weather"
import "./App.css";
import "./Weather.css";

export default function App() {
  return (
    <div className="App">
      <h1> Weather App </h1>
      <Weather />

        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/alexandraverasalinas"
            target="_blank" rel="noreferrer"
          >
            Alexandra Vera
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/alexandraverasalinas/REACT-Weather-App"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://suspicious-beaver-111c4d.netlify.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
  );
}
