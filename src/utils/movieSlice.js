import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        movies: null,
        video: null,
        popularmovie : null,
        topratedmovie:null,
        upcomingmovie:null,
        searchmovies:null,
    },
    reducers: {
        addMovie(state, action) {
            state.movies = action.payload;
        },
        addPopularMovie(state, action) {
            state.popularmovie = action.payload;
        },
        addTopratedMovie(state, action) {
            state.topratedmovie = action.payload;
        },
        addUpcomingMovie(state, action) {
            state.upcomingmovie = action.payload;
        },
        addVideo(state,action){
            state.video = action.payload;
        },
        addsearchedMovie(state,action){
            state.searchmovies = action.payload;
        }
    }
})

export const {addMovie ,addVideo,addPopularMovie,addTopratedMovie,addUpcomingMovie,addsearchedMovie} = movieSlice.actions;
export default movieSlice.reducer;