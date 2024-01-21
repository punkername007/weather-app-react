import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <header>
        <nav
          className="navbar navbar-expand bg-dark border-bottom"
          data-bs-theme="dark"
        >
          <div className="container-fluid">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="nav-link"
                >
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="nav-link"
                >
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="nav-link"
                >
                  Link
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Enter a city ..."
              ></input>
              <button className="btn btn-light btn-outline-dark" type="submit">
                Search
              </button>
            </form>
          </div>
        </nav>
      </header>

      <main className="container">
        <div className="row ">
          <div className="col ms-5">
            <h1>City</h1>
            <div>Sunday 00:00, sunny</div>
          </div>
          <div className="col me-5 text-end">
            <div>☀️ 6 °</div>
            <div>
              Precipitation: 0%, Humidity: 0% <br />
              Wind: 0 km/h
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
