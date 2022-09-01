import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieReviews } from '../services/Api';
import { TitleReview, Loader, ContainerFlex } from '../components/styled'
import { RotatingLines } from 'react-loader-spinner';

const Reviews = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [movieReviews, setmovieReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getMovieReviews(movieId)
      .then(data => {
        setmovieReviews(data.results);
      })
      .catch(error => {
        console.error(error);
      }).finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);

  return (
    <ContainerFlex>
      {!isLoading && movieReviews.length > 0 && (
        <ul>
          {movieReviews.map(review => {
            return (
              <li key={review.id}>
                <TitleReview >Author: {review.author}</TitleReview >
                <p>{review.content}</p>
              </li>
            )
          }
          )
          }
        </ul>
      )}
      {!isLoading && movieReviews.length === 0 && (<p>We don`t have any reviews for this movie</p>)}
      {isLoading && (<Loader>
        <RotatingLines
          strokeColor="#3f51b5"
          strokeWidth="5"
          animationDuration="0.75"
          width="150"
          visible={true}
        />
      </Loader>)}
    </ContainerFlex>
  );
};
export default Reviews;
