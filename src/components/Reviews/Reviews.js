import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const MY_API_KEY = 'ceffe16ccd7d46ce9932d25cc21ec8d8';

export const Reviews = () => {
  const [movieReviews, setmovieReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3///movie/${movieId}/reviews?api_key=${MY_API_KEY}`
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        // setMovieCast(data.cast);
        // setUrl(getUrl(data.cast));
        setmovieReviews(data.results);
        console.log(data.results);
      });
  }, []);

  return (
    <div>
      <ul>
        {movieReviews.length > 0 ? (
          movieReviews.map(review => {
            return (
              <li key={review.id}>
                <p>Author: {review.author}</p>
                <p>{review.content}</p>
              </li>
            );
          })
        ) : (
          <p>We don`t have any reviews for this movie</p>
        )}
      </ul>
    </div>
  );
};
