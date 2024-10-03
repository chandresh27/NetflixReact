
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { options } from '../../utils/contants.js';
import { addUpcomingMovie } from '../../utils/movieSlice.js';
const useUpcomingMovies = () => {

    const dispatch = useDispatch()
    const upcomingMovie = useSelector((store)=> store.movie.upcomingmovie)
    const getUpcomingmovieData = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', options);
        const data = await response.json();
        dispatch(addUpcomingMovie(data.results))

    };

    useEffect(() => {
       !upcomingMovie && getUpcomingmovieData();
    }, [])
}

export default useUpcomingMovies;