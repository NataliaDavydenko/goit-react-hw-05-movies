import { Loader } from 'components/Loader/Loader';
import { MovieList, MovieItem } from 'pages/Home/Home.styled';
import { useState, useEffect } from 'react';
import { searchMovies } from 'api/api';
import { SearchBar } from 'components/SearchForm/SearchBar';
import { useSearchParams, useLocation } from 'react-router-dom';


export const Movies = () => {
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    const movieName = searchParams.get('movieName') ?? '';
    const [moviesList, setMoviesList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    const submitForm = e => {
        e.preventDefault();
        const searchText = e.currentTarget;
        setSearchParams({ movieName: searchText.elements.movieName.value });
        searchText.reset();
    };
    
    useEffect(() => {
    if (movieName === '') {
      return;
    }
    setMoviesList([]);
    setIsLoading(true);

    searchMovies(movieName).then(data => {
      if (!data.results.length) {
        setIsLoading(false);
        setError(true);
        return console.log(
          'There is no movies with this request. Please, try again'
        );
      }
      setError(false);
      setMoviesList(data.results);
      setIsLoading(false);
    });
  }, [movieName]);

    return (
        <main>
            <SearchBar onSubmit={submitForm} />
            {error && <p>We do not find movies with your request. Please, try again</p>}
              <MovieList>
        {moviesList.map(movie => {
          return (
            <li key={movie.id}>
              <MovieItem to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.original_title || movie.name}
              </MovieItem>
            </li>
          );
        })}
        {isLoading && <Loader />}
      </MovieList>
    </main>
    );
}