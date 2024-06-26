import React from "react";
import Weather from "./Weather"
import "./App.css";
import "./Weather.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultCity="New York" />

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
            href="https://react-weather-app-avs.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
      </div>
  );
  }