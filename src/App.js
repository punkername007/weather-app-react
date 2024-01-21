import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="buenos aires" />
      </div>
      <footer>
        This project was coded by{" "}
        <a
          href="https://github.com/punkername007"
          target="_blank"
          rel="noreferrer"
        >
          Selene Roa
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/punkername007/weather-app-react"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a
          href="https://sr-weather-react.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;
