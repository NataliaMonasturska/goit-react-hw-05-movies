import { Link, Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [releaseDate, setReleaseDate] = useState('');
  const [genres, setGenres] = useState([]);
  const location = useLocation();
  const linkToBack = location.state?.from ?? '/Home';
  const MY_API_KEY = 'ceffe16ccd7d46ce9932d25cc21ec8d8';
  const YearNormalize = releaseDate.slice(0, 4);
  const percent = Math.round(movie.vote_average * 10);
  const overview = movie.overview;
  // const genres = movie.genres;
  console.log('genres', genres);
  console.log(movie.vote_average);
  console.log(percent);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3//movie/${location.state.id}?api_key=${MY_API_KEY}`
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        setMovie(data);
        setReleaseDate(data.release_date);
        setGenres(data.genres)
        console.log(data);
        console.log(location.state.id);
      });
  }, [location.state.id]);
  // const genres = movie.genres;
  return (
    <div>
      <Link to={linkToBack}>Go back</Link>
      <br />
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
      />
      <p>{movie.title}</p>
      <p>({YearNormalize})</p>
      <p>User Score: {percent}%</p>
      <br/>
      <p>Overview</p>
      <br/>
      <p>{overview}</p>
      <br/>
      <p>Genres</p>
      <br/>
      <ul>
      {  genres.length > 0 && genres.map(genre => <li key={genre.id}><p>{genre.name}</p></li>)}
      </ul>
      <p></p>
      <div>
        <p>Additional information</p>
        <ul>
          <Link to="cast">Cast</Link>
          <br />
          <Link to="reviews">Reviews</Link>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};
