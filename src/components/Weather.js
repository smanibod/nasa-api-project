import React, { useEffect, useState } from "react";
import { apiKey, month } from "../utils";

const API_URL = `https://api.nasa.gov/insight_weather/?api_key=${apiKey}&feedtype=json&ver=1.0`;
const default_sol = "691";
const default_maxTemp = "-17.861";
const default_minTemp = "95.453";
const default_windSpeed = "6.404";
const default_windDirectionDegrees = "269";
const default_windDirectionCardinal = "W";
const default_date = "2020-10-30T01:08:13Z";
export default function Weather() {
  const [weather, setWeather] = useState(null);
  const [classToggle, setClassToggle] = useState("previous-weather");

  useEffect(() => {
    getWeather().then((sols) => {
      setWeather(sols);
    });

    function getWeather() {
      return fetch(API_URL)
        .then((res) => res.json())
        .then((resData) => {
          const { sol_keys, validity_checks, ...solData } = resData;
          return Object.entries(solData).map(([sol, data]) => {
            return {
              sol: sol ? sol : default_sol,
              maxTemp: data.AT.mx ? data.AT.mx : default_maxTemp,
              minTemp: data.AT.mn ? data.AT.mn : default_minTemp,
              windSpeed: data.HWS ? data.HWS.av : default_windSpeed,
              windDirectionDegrees: data.WD.most_common
                ? data.WD.most_common.compass_degrees
                : default_windDirectionDegrees,
              windDirectionCardinal: data.WD.most_common
                ? data.WD.most_common.compass_point
                : default_windDirectionCardinal,
              date: new Date(data.First_UTC)
                ? new Date(data.First_UTC)
                : new Date(default_date),
            };
          });
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

  if (weather) {
    return (
      <div className="weather-main">
        <main className="mars-current-weather">
          <h1 className="main-title">Latest weather at Elysium Plantitia!</h1>

          <div className="date">
            <h2 className="section-title section-title--date">
              Sol {weather[0].sol}
            </h2>
            <p className="date__day">
              {month[weather[0].date.getMonth()]} {weather[0].date.getDate()}
            </p>
          </div>

          <div className="temp">
            <h2 className="section-title">Temperature</h2>
            <p className="reading">High: {weather[0].maxTemp}°C</p>
            <p className="reading">Low: {weather[0].minTemp}</p>
          </div>
          <div className="wind">
            <h2 className="section-title">Wind</h2>
            <p className="reading">{weather[0].windSpeed} kph</p>
            <p className="reading">{weather[0].windDirectionDegrees}deg</p>
            <p className="reading">{weather[0].windDirectionCardinal}</p>

            <div className="wind__direction">
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
            Previous 7 Days
          </h2>
          <div className="previous-days">
            {weather.length > 4 ? (
              weather.map((sol) => (
                <div className="previous-day">
                  <h3 className="previous-day__sol"> Sol {sol.sol}</h3>
                  <p className="previous-day__date">
                    {month[weather[0].date.getMonth()]} {sol.date.getDate()}
                  </p>
                  <p className="previous-day__temp">High: {sol.maxTemp}C</p>
                  <p className="previous-day__temp">Low: {sol.minTemp}°C</p>
                  <button className="previous-day__more-info">more info</button>
                </div>
              ))
            ) : (
              <>
                <div className="previous-day">
                  <h3 className="previous-day__sol">
                    {" "}
                    Sol {weather[0].sol - 7}
                  </h3>
                  <p className="previous-day__date">
                    {month[weather[0].date.getMonth()]}{" "}
                    {weather[0].date.getDate() - 7}
                  </p>
                  <p className="previous-day__temp">
                    High: {weather[0].maxTemp}C
                  </p>
                  <p className="previous-day__temp">
                    Low: {weather[0].minTemp}°C
                  </p>
                  <button className="previous-day__more-info">more info</button>
                </div>
                <div className="previous-day">
                  <h3 className="previous-day__sol">
                    {" "}
                    Sol {weather[0].sol - 6}
                  </h3>
                  <p className="previous-day__date">
                    {month[weather[0].date.getMonth()]}{" "}
                    {weather[0].date.getDate() - 6}
                  </p>
                  <p className="previous-day__temp">
                    High: {weather[0].maxTemp}C
                  </p>
                  <p className="previous-day__temp">
                    Low: {weather[0].minTemp}°C
                  </p>
                  <button className="previous-day__more-info">more info</button>
                </div>
                <div className="previous-day">
                  <h3 className="previous-day__sol">
                    {" "}
                    Sol {weather[0].sol - 5}
                  </h3>
                  <p className="previous-day__date">
                    {month[weather[0].date.getMonth()]}{" "}
                    {weather[0].date.getDate() - 5}
                  </p>
                  <p className="previous-day__temp">
                    High: {weather[0].maxTemp}C
                  </p>
                  <p className="previous-day__temp">
                    Low: {weather[0].minTemp}°C
                  </p>
                  <button className="previous-day__more-info">more info</button>
                </div>
                <div className="previous-day">
                  <h3 className="previous-day__sol">
                    {" "}
                    Sol {weather[0].sol - 4}
                  </h3>
                  <p className="previous-day__date">
                    {month[weather[0].date.getMonth()]}{" "}
                    {weather[0].date.getDate() - 4}
                  </p>
                  <p className="previous-day__temp">
                    High: {weather[0].maxTemp}C
                  </p>
                  <p className="previous-day__temp">
                    Low: {weather[0].minTemp}°C
                  </p>
                  <button className="previous-day__more-info">more info</button>
                </div>
                <div className="previous-day">
                  <h3 className="previous-day__sol">
                    {" "}
                    Sol {weather[0].sol - 3}
                  </h3>
                  <p className="previous-day__date">
                    {month[weather[0].date.getMonth()]}{" "}
                    {weather[0].date.getDate() - 3}
                  </p>
                  <p className="previous-day__temp">
                    High: {weather[0].maxTemp}C
                  </p>
                  <p className="previous-day__temp">
                    Low: {weather[0].minTemp}°C
                  </p>
                  <button className="previous-day__more-info">more info</button>
                </div>
                <div className="previous-day">
                  <h3 className="previous-day__sol">
                    {" "}
                    Sol {weather[0].sol - 2}
                  </h3>
                  <p className="previous-day__date">
                    {month[weather[0].date.getMonth()]}{" "}
                    {weather[0].date.getDate() - 2}
                  </p>
                  <p className="previous-day__temp">
                    High: {weather[0].maxTemp}C
                  </p>
                  <p className="previous-day__temp">
                    Low: {weather[0].minTemp}°C
                  </p>
                  <button className="previous-day__more-info">more info</button>
                </div>
                <div className="previous-day">
                  <h3 className="previous-day__sol">
                    {" "}
                    Sol {weather[0].sol - 1}
                  </h3>
                  <p className="previous-day__date">
                    {month[weather[0].date.getMonth()]}{" "}
                    {weather[0].date.getDate() - 1}
                  </p>
                  <p className="previous-day__temp">
                    High: {weather[0].maxTemp}C
                  </p>
                  <p className="previous-day__temp">
                    Low: {weather[0].minTemp}°C
                  </p>
                  <button className="previous-day__more-info">more info</button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
