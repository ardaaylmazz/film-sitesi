import { useState, useEffect } from "react";
import MovieInfo from './MovieInfo'
import SimilarMovies from "./SimilarMovies";

const MoviePage = ({ match }) => {
  const [movie, setMovie] = useState({});
  const [similars, setSimilars] = useState([]);

  useEffect(() => {
    // Get Details
    fetch(
      `https://api.themoviedb.org/3/movie/${match.params.id}?api_key=235b77fe4aedf709eb99a3ac9f078f57&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
        console.log(data);
      });

    //Get Similar Movies
    fetch(
      `https://api.themoviedb.org/3/movie/${match.params.id}/similar?api_key=235b77fe4aedf709eb99a3ac9f078f57&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((data) => setSimilars(data.results));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="movie-page">
        <h1>{movie.title}</h1>

        <MovieInfo movie={movie} />

        <SimilarMovies similars={similars} />
      </div>
    </>
  );
};

export default MoviePage;
