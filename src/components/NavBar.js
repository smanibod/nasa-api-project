import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navbar">
      <ul>
        <Link className="link" to="/">
          Mars Weather
        </Link>
        <Link className="link" to="/nasa-apod">
          APOD
        </Link>
        <Link className="link" to="/gallery">
          Gallery
        </Link>
      </ul>
    </div>
  );
}
