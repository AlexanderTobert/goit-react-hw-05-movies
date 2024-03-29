import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const defaultImg =
  'https://salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png';

const HomeList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className="movieLinkList">
      {movies.map(movie => (
        <Link
          state={{ from: location }}
          className="movieLink"
          key={movie.id}
          to={`/movies/${movie.id}`}
        >
          <li className="movieItem">
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                  : defaultImg
              }
              width={130}
              height={180}
              alt="poster"
            />
            <p>{movie.title ? movie.title : movie.name}</p>
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default HomeList;
