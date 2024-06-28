import React from "react";

export default function FilmCard({ movie }) {
  return (
    <div className="film-card">
      <img src={movie.image} alt="Movie Poster" />
      <h2>{movie.name}</h2>
      <span> Category : {movie.genre}</span>
      <span>
        {" "}
        <a>IMDB :</a> {movie.imdb}
      </span>
      <span> Director : {movie.director}</span>
      <span> Price : {movie.price} $</span>
      <p>{movie.description}</p>
    </div>
  );
}
