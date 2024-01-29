import React from 'react';
const defaultImg =
  'https://salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png';

const CastList = ({ cast }) => {
  // console.log(cast);
  return (
    <ul>
      {cast &&
        cast.map(({ name, profile_path, character, id }) => (
          <li key={id}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                  : defaultImg
              }
              width={150}
              alt="poster"
            />
            <h3>{name}</h3>
            <p>Character: {character}</p>
          </li>
        ))}
    </ul>
  );
};

export default CastList;
