import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieCast } from '../../components/Api';

 const Cast = () => {
  const [movieCast, setMovieCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCast(movieId)
      .then(data => {
        setMovieCast(data.cast);
      })
      .catch(error => {
        console.error(error);
      });
  }, [movieId]);

  return (
    <ul>
      {movieCast.length > 0 &&
        movieCast.map(c => {
          return (
            <li key={c.id}>
              {c.profile_path !== null && c.profile_path !== undefined && (
                <img
                  src={`https://image.tmdb.org/t/p/w500${c.profile_path}`}
                  alt={c.name}
                />
              )}
              <p>{c.name}</p>
              <p>Character: {c.character}</p>
            </li>
          );
        })}
    </ul>
  );
};

export default Cast