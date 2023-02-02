import React, { useState } from "react";
import Result from "./Result";
import axios from "axios";
import "./App.css";

function App() {
  const [city, setCity] = useState("Odesa");
  const [result, setResult] = useState(null);
  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "e43d0522c6a2b491f8bte6b227o4172b";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemperature);
  }
  function showTemperature(response) {
    setResult({
      city: response.data.city,
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      icon: response.data.condition.icon,
    });
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  if (result) {
    return (
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <form onSubmit={handleSubmit} className="mb-3">
              <div className="row">
                <div className="col-2">
                  <button
                    type="button"
                    className="btn btn-primary"
                    id="current-location"
                  >
                    Current{" "}
                  </button>
                </div>
                <div className="col-8">
                  <input
                    type="search"
                    onChange={updateCity}
                    placeholder="Search for a city"
                    className="form-control"
                    autoComplete="off"
                  />
                </div>
                <div className="col-2">
                  <input
                    type="submit"
                    value="Search"
                    className="btn btn-primary"
                  />
                </div>
              </div>
            </form>
            <Result result={result} />
            <small>
              <a
                href="https://github.com/vladagr-151107/vanilla-weather-app"
                target="_blank"
                rel="noreferrer"
              >
                Open-source code
              </a>{" "}
              by{" "}
              <a
                href="https://www.instagram.com/_princesska_1511_/?igshid=YmMyMTA2M2Y%3D"
                target="_blank"
                rel="noreferrer"
              >
                Vlada Grushchenko
              </a>
            </small>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <form onSubmit={handleSubmit} className="mb-3">
              <div className="row">
                <div className="col-2">
                  <button
                    type="button"
                    className="btn btn-primary"
                    id="current-location"
                  >
                    Current{" "}
                  </button>
                </div>
                <div className="col-8">
                  <input
                    type="search"
                    onChange={updateCity}
                    placeholder="Search for a city"
                    className="form-control"
                    autoComplete="off"
                  />
                </div>
                <div className="col-2">
                  <input
                    type="submit"
                    value="Search"
                    className="btn btn-primary"
                  />
                </div>
              </div>
            </form>
            <div className="overview">
              <h1> Odesa </h1>
              <ul>
                <li>
                  <span> Wednesday, Feb 2 13:53</span>
                </li>
                <li> Сlear</li>
              </ul>
            </div>
            <div className="row">
              <div className="col-6">
                <div className="d-flex weather-temperature">
                  <img
                    src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
                    alt="Clear"
                  />
                  <div className="float-left">
                    <strong id="temperature"> 2</strong>
                    <span className="units">°C</span>
                  </div>
                </div>
              </div>
              <div classname="col-6">
                <ul>
                  <li>
                    Humidity: <span></span>67%
                  </li>
                  <li>
                    Wind: <span></span>9 km/h
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <small>
            <a
              href="https://github.com/vladagr-151107/vanilla-weather-app"
              target="_blank"
              rel="noreferrer"
            >
              Open-source code
            </a>{" "}
            by{" "}
            <a
              href="https://www.instagram.com/_princesska_1511_/?igshid=YmMyMTA2M2Y%3D"
              target="_blank"
              rel="noreferrer"
            >
              Vlada Grushchenko
            </a>
          </small>
        </div>
      </div>
    );
  }
}
export default App();
