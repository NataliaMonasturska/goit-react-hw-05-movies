import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
const MY_API_KEY = 'ceffe16ccd7d46ce9932d25cc21ec8d8';

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const location = useLocation();
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${MY_API_KEY}`
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        setTrendingMovies(data.results);
      });
  }, []);
  return (
    <div>
      <p>Trending today</p>
      <ul>
        {trendingMovies.length > 0 &&
          trendingMovies.map(Movie => (
            <li key={Movie.id}>
              <Link
                to= {`/movies/${Movie.id}`}
                state={{ from: location, id: Movie.id }}
              >
                {Movie.title}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};
