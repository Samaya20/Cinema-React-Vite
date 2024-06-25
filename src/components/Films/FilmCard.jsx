import React from 'react';

export default function FilmCard(props) {
  return (
    <div className="film-card">
      <img src={props.image} alt="Movie Poster" />
    </div>
  );
}
