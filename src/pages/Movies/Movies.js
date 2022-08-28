import { useEffect, useState } from 'react';
import { useSearchParams, useLocation, Link } from 'react-router-dom';
const MY_API_KEY = 'ceffe16ccd7d46ce9932d25cc21ec8d8';

export const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('query') ?? '');

  const [films, setFilms] = useState([]);
  const location = useLocation();
  console.log(searchParams.get('query'));

  // if(searchParams.get('query')){
  //   setQuery(searchParams.get('query'))
  // }

  //   changeFilter(query.trim());
  //  console.log(location);

  useEffect(() => {
    if (query === '') {
      return;
    }
    // if(searchParams.get('query')){
    //   setQuery(searchParams.get('query'))
    // }
    const changeFilter = valueFilter => {
      // console.log('valueFilter',  valueFilter);
      setSearchParams(valueFilter !== '' ? { query: valueFilter } : {});
      // console.log(searchParams.get('query'));
    };
    // if (location.state.query !== ''){
    //   // setQuery(location.state.query)
    //   recordsQuery(location.state.query)
    // }
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${MY_API_KEY}&query=${query}`
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        // console.log(data);
        setFilms(data.results);
        changeFilter(query.trim());
      });
  }, [query, setSearchParams]);
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          // console.log(e.target.elements.text.value);
          // changeFilter(e.target.elements.text.value.trim());
          setQuery(e.target.elements.text.value.trim());
          e.target.reset();
        }}
      >
        <input
          type="text"
          // value={value}
          name="text"
        ></input>
        <button type="submit">find film</button>
      </form>
      <ul>
        {films.length > 0 &&
          films.map(film => (
            <li key={film.id}>
              <Link
                to={`/movies/${film.id}`}
                state={{ from: location, id: film.id, query: query }}
              >
                {film.title}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};
