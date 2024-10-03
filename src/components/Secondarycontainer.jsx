import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const Secondarycontainer = () => {

  const movie = useSelector((store) => store?.movie);

  return (
    <div className='bg-black ' >
      <div className='relative -mt-52 px-4 md:px-8 lg:px-16 xl:px-24'>
        <MovieList title={"Now Playing"} movie={movie?.movies} />
        <MovieList title={"Popular"} movie={movie?.popularmovie} />
        <MovieList title={"Up Coming"} movie={movie?.upcomingmovie} />
        <MovieList title={"Top Rated"} movie={movie?.topratedmovie} />
      </div>
    </div>
  );
}

export default Secondarycontainer;
