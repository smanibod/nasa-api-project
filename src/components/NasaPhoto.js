import React, { useState, useEffect } from "react";
import { apiKey } from "../utils";
const date = new Date();
const TODAY =
  date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();

export default function NasaPhoto() {
  const [photoData, setPhotoData] = useState(null);

  useEffect(() => {
    fetchPhoto();

    async function fetchPhoto() {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?date=${TODAY}&api_key=${apiKey}`
      );
      const data = await res.json();
      console.log(data);
      setPhotoData(data);
    }
  }, []);

  const randomDate = () => {
    let year =
      Math.floor(Math.random() * (date.getFullYear() - 2010) + 1) + 2010;
    console.log(year);
    let month;
    let day;
    if (year === 2020) {
      month = Math.floor(Math.random() * (date.getMonth() + 1)) + 1;
    } else {
      month = Math.floor(Math.random() * 12) + 1;
    }

    if (
      month === 1 ||
      month === 3 ||
      month === 5 ||
      month === 7 ||
      month === 8 ||
      month === 10 ||
      month === 12
    ) {
      day = Math.floor(Math.random() * 31) + 1;
    } else if (month === 4 || month === 6 || month === 9 || month === 11) {
      day = Math.floor(Math.random() * 30) + 1;
    } else {
      day = Math.floor(Math.random() * 28) + 1;
    }
    const res = year + "-" + month + "-" + day;

    return res;
  };

  const generateNewPhoto = () => {
    const newDate = randomDate();
    fetchNewPhoto();

    async function fetchNewPhoto() {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?date=${newDate}&api_key=${apiKey}`
      );
      const data = await res.json();
      setPhotoData(data);
    }
  };

  if (!photoData) return <div />;

  return (
    <>
      <h1 className="apod-title">NASA: Astronomy Photo of the Day</h1>
      <div className="nasa-photo">
        {photoData.media_type === "image" ? (
          <img src={photoData.url} alt={photoData.title} className="photo" />
        ) : (
          <iframe
            title="space-video"
            src={photoData.url}
            frameBorder="0"
            gesture="autoplay"
            allow="encrypted-media"
            allowFullScreen
            className="photo"
          />
        )}
        <div>
          <h1>{photoData.title}</h1>
          <p className="date">{photoData.date}</p>
          <p className="explanation">{photoData.explanation}</p>

          <button className="button" onClick={generateNewPhoto}>
            Discover new Photo
          </button>
        </div>
      </div>
    </>
  );
}
