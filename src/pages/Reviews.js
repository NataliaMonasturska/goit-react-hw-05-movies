import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieReviews } from '../services/Api';
import { TitleReview } from '../components/styled'

const Reviews = () => {
  const [movieReviews, setmovieReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId)
      .then(data => {
        setmovieReviews(data.results);
      })
      .catch(error => {
        console.error(error);
      });
  }, [movieId]);

  return (
    <div>
      <ul>
        {movieReviews.length > 0 ? (
          movieReviews.map(review => {
            return (
              <li key={review.id}>
                <TitleReview >Author: {review.author}</TitleReview >
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
export default Reviews;
