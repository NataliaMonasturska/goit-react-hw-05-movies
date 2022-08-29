import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { useEffect, useState, Suspense } from 'react';
import { getMovieDetails} from '../../components/Api';


 const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [releaseDate, setReleaseDate] = useState('');
  const [genres, setGenres] = useState([]);
  const location = useLocation();
  const linkToBack = location.state?.from ?? '/Home';
  const YearNormalize = releaseDate.slice(0, 4);
  const percent = Math.round(movie.vote_average * 10);
  const overview = movie.overview;
  const { movieId } = useParams();
  const img =
    movie.poster_path !== null && movie.poster_path !== undefined
      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
      : '';

  useEffect(() => {
    getMovieDetails(movieId)
      .then(data => {
        setMovie(data);
        setReleaseDate(data.release_date);
        setGenres(data.genres);
      });
  }, [movieId]);

  return (
    <div>
      <Link to={linkToBack}>Go back</Link>
      <br />
      <img src={`${img}`} alt={movie.title} />
      <p>{movie.title}</p>
      <p>({YearNormalize})</p>
      <p>User Score: {percent}%</p>
      <br />
      <p>Overview</p>
      <br />
      <p>{overview}</p>
      <br />
      <p>Genres</p>
      <br />
      <ul>
        {genres.length > 0 &&
          genres.map(genre => (
            <li key={genre.id}>
              <p>{genre.name}</p>
            </li>
          ))}
      </ul>
      <p></p>
      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <br />
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
      <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails 