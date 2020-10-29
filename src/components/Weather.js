import React, { useEffect, useState } from "react";
import apiKey from "../utils";

//https: //api.nasa.gov/insight_weather/?api_key=${apiKey}&feedtype=json&ver=1.0
export default function Weather() {
  const [weather, setWeather] = useState(null);
  const [classToggle, setClassToggle] = useState("previous-weather");

  useEffect(() => {
    fetchPhoto();

    async function fetchPhoto() {
      fetch(
        `https: //api.nasa.gov/insight_weather/?api_key=${apiKey}&feedtype=json&ver=1.0`
      )
        .then((res) => {
          res.json();
        })
        .then((data) => {
          const { solKeys, validity_checks, ...solData } = data;
          setWeather(
            Object.entries(solData).map(([sol, data]) => {
              return {
                sol: sol,
                maxTemp: data.AT.mx,
                minTemp: data.AT.mn,
                windSpeed: data.HWS.av,
                windDirectionDegrees: data.WD.most_common.compass_degrees,
                windDirectionCardinal: data.WF.most.common.compass_point,
                date: new Date(data.First_UTC),
              };
            })
          );
        });
    }
  }, []);

  const toggleClass = () => {
    if (classToggle === "previous-weather") {
      setClassToggle("previous-weather show-weather");
    } else {
      setClassToggle("previous-weather");
    }
  };

  if (!weather) {
    return (
      <div className="weather-main">
        <main className="mars-current-weather">
          <h1 className="main-title">Latest weather at Elysium Plantitia</h1>

          <div className="date">
            <h2 className="section-title section-title--date">Sol 377</h2>
            <p className="date__day">September 31</p>
          </div>

          <div className="temp">
            <h2 className="section-title">Temperature</h2>
            <p className="reading">High: -20°C</p>
            <p className="reading">Low: -120°C</p>
          </div>
          <div className="wind">
            <h2 className="section-title">Wind</h2>
            <p className="reading">75 kph</p>

            <div className="wind__direction">
              <p className="sr-only">45deg</p>

              <div className="wind__arrow"></div>
            </div>
          </div>
          <div className="info">
            <p>
              InSight is taking daily weather measurements (temperature, wind,
              pressure) on the surface of Mars at Elysium Planitia, a flat,
              smooth plain near Mars’ equator.
            </p>
            <p>
              This is only a part of InSight’s mission.{" "}
              <a
                href="https://mars.nasa.gov/insight/mission/overview/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click here
              </a>{" "}
              to find out more.
            </p>
          </div>
        </main>
        <div className={classToggle}>
          <button
            htmlFor="weather-toggle"
            className="show-previous-weather"
            onClick={toggleClass}
          >
            <span>&#8593;</span>
          </button>

          <h2 className="main-title previous-weather__title">
            Previous 7 days
          </h2>

          <div className="previous-days">
            <div className="previous-day">
              <h3 className="previous-day__sol"> Sol 371</h3>
              <p className="previous-day__date">Septermber 31</p>
              <p className="previous-day__temp">High: -20°C</p>
              <p className="previous-day__temp">Low: -120°C</p>
              <button className="previous-day__more-info">more info</button>
            </div>
            <div className="previous-day">
              <h3 className="previous-day__sol"> Sol 371</h3>
              <p className="previous-day__date">Septermber 31</p>
              <p className="previous-day__temp">High: -20°C</p>
              <p className="previous-day__temp">Low: -120°C</p>
              <button className="previous-day__more-info">more info</button>
            </div>
            <div className="previous-day">
              <h3 className="previous-day__sol"> Sol 371</h3>
              <p className="previous-day__date">Septermber 31</p>
              <p className="previous-day__temp">High: -20°C</p>
              <p className="previous-day__temp">Low: -120°C</p>
              <button className="previous-day__more-info">more info</button>
            </div>
            <div className="previous-day">
              <h3 className="previous-day__sol"> Sol 371</h3>
              <p className="previous-day__date">Septermber 31</p>
              <p className="previous-day__temp">High: -20°C</p>
              <p className="previous-day__temp">Low: -120°C</p>
              <button className="previous-day__more-info">more info</button>
            </div>
            <div className="previous-day">
              <h3 className="previous-day__sol"> Sol 371</h3>
              <p className="previous-day__date">Septermber 31</p>
              <p className="previous-day__temp">High: -20°C</p>
              <p className="previous-day__temp">Low: -120°C</p>
              <button className="previous-day__more-info">more info</button>
            </div>
            <div className="previous-day">
              <h3 className="previous-day__sol"> Sol 371</h3>
              <p className="previous-day__date">Septermber 31</p>
              <p className="previous-day__temp">High: -20°C</p>
              <p className="previous-day__temp">Low: -120°C</p>
              <button className="previous-day__more-info">more info</button>
            </div>
            <div className="previous-day">
              <h3 className="previous-day__sol"> Sol 371</h3>
              <p className="previous-day__date">Septermber 31</p>
              <p className="previous-day__temp">High: -20°C</p>
              <p className="previous-day__temp">Low: -120°C</p>
              <button className="previous-day__more-info">more info</button>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    //API
    return (
      <div className="weather-main">
        <main className="mars-current-weather">
          <h1 className="main-title">Latest weather at Elysium Plantitia</h1>

          <div className="date">
            <h2 className="section-title section-title--date">Sol 377</h2>
            <p className="date__day">September 31</p>
          </div>

          <div className="temp">
            <h2 className="section-title">Temperature</h2>
            <p className="reading">High: -20°C</p>
            <p className="reading">Low: -120°C</p>
          </div>
          <div className="wind">
            <h2 className="section-title">Wind</h2>
            <p className="reading">75 kph</p>

            <div className="wind__direction">
              <p className="sr-only">45deg</p>

              <div className="wind__arrow"></div>
            </div>
          </div>
          <div className="info">
            <p>
              InSight is taking daily weather measurements (temperature, wind,
              pressure) on the surface of Mars at Elysium Planitia, a flat,
              smooth plain near Mars’ equator.
            </p>
            <p>
              This is only a part of InSight’s mission.{" "}
              <a
                href="https://mars.nasa.gov/insight/mission/overview/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click here
              </a>{" "}
              to find out more.
            </p>
          </div>
        </main>
        <div className={classToggle}>
          <button
            htmlFor="weather-toggle"
            className="show-previous-weather"
            onClick={toggleClass}
          >
            <span>&#8593;</span>
          </button>

          <h2 className="main-title previous-weather__title">
            Previous 7 days
          </h2>

          <div className="previous-days">
            <div className="previous-day">
              <h3 className="previous-day__sol"> Sol 371</h3>
              <p className="previous-day__date">Septermber 31</p>
              <p className="previous-day__temp">High: -20°C</p>
              <p className="previous-day__temp">Low: -120°C</p>
              <button className="previous-day__more-info">more info</button>
            </div>
            <div className="previous-day">
              <h3 className="previous-day__sol"> Sol 371</h3>
              <p className="previous-day__date">Septermber 31</p>
              <p className="previous-day__temp">High: -20°C</p>
              <p className="previous-day__temp">Low: -120°C</p>
              <button className="previous-day__more-info">more info</button>
            </div>
            <div className="previous-day">
              <h3 className="previous-day__sol"> Sol 371</h3>
              <p className="previous-day__date">Septermber 31</p>
              <p className="previous-day__temp">High: -20°C</p>
              <p className="previous-day__temp">Low: -120°C</p>
              <button className="previous-day__more-info">more info</button>
            </div>
            <div className="previous-day">
              <h3 className="previous-day__sol"> Sol 371</h3>
              <p className="previous-day__date">Septermber 31</p>
              <p className="previous-day__temp">High: -20°C</p>
              <p className="previous-day__temp">Low: -120°C</p>
              <button className="previous-day__more-info">more info</button>
            </div>
            <div className="previous-day">
              <h3 className="previous-day__sol"> Sol 371</h3>
              <p className="previous-day__date">Septermber 31</p>
              <p className="previous-day__temp">High: -20°C</p>
              <p className="previous-day__temp">Low: -120°C</p>
              <button className="previous-day__more-info">more info</button>
            </div>
            <div className="previous-day">
              <h3 className="previous-day__sol"> Sol 371</h3>
              <p className="previous-day__date">Septermber 31</p>
              <p className="previous-day__temp">High: -20°C</p>
              <p className="previous-day__temp">Low: -120°C</p>
              <button className="previous-day__more-info">more info</button>
            </div>
            <div className="previous-day">
              <h3 className="previous-day__sol"> Sol 371</h3>
              <p className="previous-day__date">Septermber 31</p>
              <p className="previous-day__temp">High: -20°C</p>
              <p className="previous-day__temp">Low: -120°C</p>
              <button className="previous-day__more-info">more info</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
