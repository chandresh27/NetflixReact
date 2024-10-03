import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const GptSearchMovie = () => {
  const searchedMovieRestusts = useSelector((store) => store.movie?.searchmovies);

  if (!searchedMovieRestusts) return null;
  console.log(searchedMovieRestusts);

  return (
    <div className="bg-black/50">
      <div className="reletive -mt-56  flex flex-wrap gap-3 ">
        {searchedMovieRestusts.map((movie) => (
          <MovieCard key={movie.id} backdrop_path={movie.backdrop_path} title={movie.title} />
        ))}
      </div>
    </div>
  );
};

export default GptSearchMovie;
