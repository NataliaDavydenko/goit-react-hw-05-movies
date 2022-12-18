import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieDetails } from '../../api/api';
import {
  BackLink,
  MovieBox,
  MovieInfo,
  GenresList,
  Button,
} from './MovieDetails.styled';
import { BiLeftArrowAlt } from 'react-icons/bi';

const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState({});
  const location = useLocation();
  const { movieId } = useParams();

  useEffect(() => {
    getMovieDetails(movieId).then(data => setMovieInfo(data));
  }, [movieId]);

  const { title, overview, genres, poster_path, vote_average } = movieInfo;
  const score = vote_average * 10;
  const scoreToFixed = score.toFixed(2);

  return (
    <main>
      <Button type="button">
        <BackLink to={location.state?.from ?? '/'}>
          <BiLeftArrowAlt size={20} />
          Back
        </BackLink>
      </Button>
      <MovieBox>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w300${poster_path}`
              : `http://www.suryalaya.org/images/no_image.jpg`
          }
          width={350}
          height={400}
          loading="lazy"
          alt="poster"
        />
        <MovieInfo>
          <h2>{title}</h2>
          <h3>User score: {scoreToFixed}%</h3>
          <h3>Overview</h3>
          <p>{overview} </p>
          <h3>Genres</h3>
          <GenresList>
            {genres &&
              genres.length &&
              genres.map(({ id, name }) => <li key={id}>{name}</li>)}
          </GenresList>
        </MovieInfo>
      </MovieBox>
      <div>
        <h4>Additional information</h4>
        <ul>
          <li>
            <Link to="cast" state={{ ...location.state }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ ...location.state }}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </main>
  );
};

export default MovieDetails;