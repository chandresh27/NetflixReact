
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { options } from '../../utils/contants.js';
import { addMovie } from '../../utils/movieSlice.js';
const useNowPlayingMovies = () => {

    const dispatch = useDispatch()
    const nowPlayingMovie = useSelector((store)=> store.movie.movies)
    const getmovieData = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', options);
        const data = await response.json();
        dispatch(addMovie(data.results))

    };

    useEffect(() => {
       !nowPlayingMovie && getmovieData();
    }, [])
}

export default useNowPlayingMovies;