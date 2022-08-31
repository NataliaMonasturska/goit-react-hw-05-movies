import { useEffect, useState } from 'react';
import { useSearchParams, useLocation, Link } from 'react-router-dom';
import { getSearchMovie } from '../components/Api';
import Notiflix from 'notiflix';
import { SearchFormInput, Button, Form, MovieContainer, Ul, Li, Title, ContainerImg, ContainerTitle, Img } from '../components/styled'

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('query') ?? '');
  const [films, setFilms] = useState([]);
  const location = useLocation();

  useEffect(() => {
    if (query === '') {
      return;
    }
    getSearchMovie(query)
      .then(data => {
        setFilms(data.results);

        if (data.results.length === 0) {
          Notiflix.Notify.failure(
            'Sorry, there are no movies matching your search query. Please try again.'
          );
        }
      })
      .catch(error => {
        console.error(error);
      });
  }, [query]);

  const onSubmit = e => {
    e.preventDefault();
    setQuery(e.target.elements.text.value.trim());
    setSearchParams(
      e.target.elements.text.value.trim() !== ''
        ? { query: e.target.elements.text.value.trim() }
        : {}
    );
    if (e.target.elements.text.value.trim() === '') {
      Notiflix.Notify.failure('Enter a query');
    }
    e.target.reset();
  };


  return (
    <MovieContainer>
      <Form onSubmit={onSubmit}>
        <SearchFormInput type="text" name="text"></SearchFormInput>
        <Button type="submit"></Button>
      </Form>
      <Ul>
        {films.length > 0 &&
          films.map(film => (
            <Li key={film.id}>
              <Link to={`/movies/${film.id}`} state={{ from: location }}>
                <ContainerImg>
                  <Img
                    src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                    alt={film.title}
                  />
                </ContainerImg>
                <ContainerTitle>
                  <Title>{film.title}</Title>
                </ContainerTitle>
              </Link>
            </Li>
          ))}
      </Ul>
    </MovieContainer>
  );
};
export default Movies;
