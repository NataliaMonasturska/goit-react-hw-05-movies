const MY_API_KEY = 'ceffe16ccd7d46ce9932d25cc21ec8d8';
const BASE_URL = 'https://api.themoviedb.org/3/';

export const getTrendingMovie = () => {
  return fetch(`${BASE_URL}trending/movie/day?api_key=${MY_API_KEY}`).then(
    response => {
      return response.ok
        ? response.json()
        : Promise.reject(new Error('Not found'));
    }
  );
};

export const getSearchMovie = query => {
  return fetch(
    `${BASE_URL}search/movie?api_key=${MY_API_KEY}&query=${query}`
  ).then(response => {
    return response.ok
      ? response.json()
      : Promise.reject(new Error('Not found'));
  });
};

export const getMovieDetails = movieId => {
  return fetch(`${BASE_URL}movie/${movieId}?api_key=${MY_API_KEY}`).then(
    response => {
      return response.ok
        ? response.json()
        : Promise.reject(new Error('Not found'));
    }
  );
};

export const getMovieCast = movieId => {
  return fetch(
    `${BASE_URL}movie/${movieId}/credits?api_key=${MY_API_KEY}`
  ).then(response => {
    return response.ok
      ? response.json()
      : Promise.reject(new Error('Not found'));
  });
};
export const getMovieReviews = movieId => {
    return fetch(
      `${BASE_URL}movie/${movieId}/reviews?api_key=${MY_API_KEY}`
    ).then(response => {
      return response.ok
        ? response.json()
        : Promise.reject(new Error('Not found'));
    });
  };
  
