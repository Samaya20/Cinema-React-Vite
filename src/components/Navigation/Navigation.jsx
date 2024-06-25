import React from "react";
import "./Navigation.css";

export default function Navigation(props) {
  return (
    <section className="navbar">
      <select name="cinemas" onChange={props.handleCinemaChange}>
        {props.cinemasData.map((cinema) => (
          <option key={cinema.id} value={cinema.name}>
            {cinema.name}
          </option>
        ))}
      </select>
      {props.selectedCinema && (
        <>
          <p className="nav-data-item">Address: {props.selectedCinema.address}</p>
          <p className="nav-data-item">Rating: {props.selectedCinema.rating}</p>
        </>
      )}
    </section>
  );
}
