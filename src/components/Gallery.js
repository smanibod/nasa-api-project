import React, { useState } from "react";

const API_URL = "https://images-api.nasa.gov/search?q=";
export default function Gallery() {
  const [gallery, setGallery] = useState(null);
  const [searchData, setSearchData] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(API_URL + searchData[""]);
    fetch(API_URL + searchData[""])
      .then((res) => res.json())
      .then((data) => {
        console.log(data.collection.items);
        setGallery(data.collection.items);
      });
  };

  const handleChange = (e) => {
    setSearchData({
      ...searchData,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });
  };

  return (
    <div>
      <h1 className="gallery-title">NASA Gallery</h1>
      <div className="gallery-wrapper">
        <input
          type="text"
          className="input"
          placeholder="Search for...(e.g. 'Jupiter')"
          onChange={handleChange}
        />
        <div className="searchbtn">
          <i className="fas fa-search" onClick={handleSubmit} />
        </div>
      </div>
      <div className="gallery" id="gallery">
        {gallery ? (
          gallery.map((item) => (
            <div>
              {item.links ? (
                <div className="gallery-item">
                  <div className="content">
                    <a
                      target="_blank"
                      href={item.links[0].href}
                      rel="noopener noreferrer"
                    >
                      <img
                        key={item.href}
                        src={item.links[0].href}
                        alt={item.href}
                      ></img>
                    </a>
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
/*
<img
              key={item.key}
              classNameName="gallery-img"
              src={item.href}
              alt=""
            />
*/
