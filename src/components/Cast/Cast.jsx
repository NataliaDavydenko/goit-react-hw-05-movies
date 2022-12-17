import { CastList, CastItem } from './Cast.styled';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieCredits } from '../../api/api';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    getMovieCredits(movieId).then(data => setCast(data.cast));
  }, [movieId]);
    
    return (
        <CastList>
      {cast.length > 0
        ? cast.map(({ id, name, profile_path, character }) => (
            <CastItem key={id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w200${profile_path}`
                    : `http://www.suryalaya.org/images/no_image.jpg`
                }
                alt="actor"
                loading="lazy"
                width={120}
                height={160}
              />
              <h3>{name}</h3>
              <p> Character: {character}</p>
            </CastItem>
          ))
        : "Sorry, we don't have information about it"}
    </CastList>
  );
};
