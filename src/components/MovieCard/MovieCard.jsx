import React from 'react';
const defaultImg =
  'https://salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png';

const MovieCard = ({ movie }) => {
  const {
    title,
    name,
    poster_path,
    overview,
    genres,
    popularity,
  } = movie;
  return (
    <div className="MovieCard">
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : defaultImg
        }
        width={250}
        alt="poster"
      />
      <div>
        <h1>{title ? title : name}</h1>
        <p>Popularity: {popularity}</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        {genres && (
          <ul>
            {genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
