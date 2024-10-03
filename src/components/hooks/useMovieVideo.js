import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { options } from '../../utils/contants';
import { addVideo } from '../../utils/movieSlice';

const useMovieVideo = (movieId) => {
    const dispatch = useDispatch();
    const trailerVideo = useSelector((store)=> store.movie.video)
    const getVideoTailer = async () => {

        const response = await fetch(
            ` https://api.themoviedb.org/3/movie/${movieId}/videos?`,
            options
        );
        const data = await response.json();

        const FilterData = data.results.filter((movie) => movie.type === "Trailer");
        const trailer =  FilterData[0] 
        dispatch(addVideo(trailer));
    };
    useEffect(() => {
        
       !trailerVideo && getVideoTailer();
    }, []);
}


export default useMovieVideo