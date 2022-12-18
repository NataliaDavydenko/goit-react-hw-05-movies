import { getTrendingMovie } from '../../api/api';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Title, MovieList, MovieItem } from './Home.styled';
import Loader from 'components/Loader/Loader';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getTrendingMovie().then(data => {
      setTrendingMovies(data.results);
      setIsLoading(false);
    });
  }, []);

  return (
    <main>
      <Title>Trending today</Title>
      <MovieList>
        {trendingMovies.map(movie => (
          <li key={movie.id}>
            <MovieItem to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.original_title || movie.name}
            </MovieItem>
          </li>
        ))}
        {isLoading && <Loader />}
      </MovieList>
    </main>
  );
};

export default Home;
