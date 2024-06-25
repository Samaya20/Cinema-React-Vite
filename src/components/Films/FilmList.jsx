import React from 'react';
import FilmCard from './FilmCard';
import "./Films.css";

export default function FilmList(props) {
  if (!props.selectedCinema) return null;

  return (
    <div className="films-list">
      {props.selectedCinema.movies.map((movie) => (
        <FilmCard key={movie.id} image={movie.image} />
      ))}
    </div>
  );
}
