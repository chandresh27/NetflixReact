
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { options } from '../../utils/contants.js';
import { addMovie, addTopratedMovie } from '../../utils/movieSlice.js';
const useTopRatedMovie = () => {

    const dispatch = useDispatch()
    const topRatedMovie = useSelector((store)=> store.movie.topratedmovie)
    const getTopRatedMovie = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', options);
        const data = await response.json();
        dispatch(addTopratedMovie(data.results))

    };

    useEffect(() => {
      !topRatedMovie &&  getTopRatedMovie();
    }, [])
}

export default useTopRatedMovie;