import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieReviews } from '../../api/api';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();
    
    useEffect(() => {
    getMovieReviews(movieId).then(data => setReviews(data.results));
    }, [movieId]);
    
    return (
    <ul>
      {reviews.length > 0
        ? reviews.map(({ author, content, id }) => (
            <li key={id}>
              <h3>{author}</h3>
              <p>{content}</p>
            </li>
          ))
        : "Sorry, review's information is empty"}
    </ul>
  );
}

export default Reviews;