import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { NasaPhoto, Weather, NavBar } from "./components";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Route component={Weather} path="/" exact />
      <Route component={NasaPhoto} path="/nasa-apod" />
    </BrowserRouter>
  );
}
