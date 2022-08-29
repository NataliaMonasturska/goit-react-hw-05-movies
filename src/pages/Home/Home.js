import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getTrendingMovie } from '../../components/Api';

 const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getTrendingMovie()
      .then(data => {
        setTrendingMovies(data.results);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <p>Trending today</p>
      <ul>
        {trendingMovies.length > 0 &&
          trendingMovies.map(Movie => (
            <li key={Movie.id}>
              <Link to={`/movies/${Movie.id}`} state={{ from: location }}>
                {Movie.title}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};
export default Home