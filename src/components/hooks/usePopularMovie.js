
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { options } from '../../utils/contants.js';
import { addPopularMovie } from '../../utils/movieSlice.js';
const usePopularMovies = () => {

    const dispatch = useDispatch()
    const populerMovie = useSelector((store)=> store.movie.popularmovie)
    const getPopulermovie = async () => {
        const response = await fetch('https://api.themoviedb.org/3/trending/movie/day?page=1', options);
        const data = await response.json();
        dispatch(addPopularMovie(data.results))

    };

    useEffect(() => {
      !populerMovie &&  getPopulermovie();
    }, [])
}

export default usePopularMovies;