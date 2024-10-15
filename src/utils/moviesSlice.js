import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlaying: null,
        trailerVideo: null,
        topRated: null,
        popular: null,
        upcoming: null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlaying = action.payload
        },
        removeNowPlayingMovies: (state, action) => {
            state.nowPlaying = null
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload
        },
        addTopRatedMovies: (state, action) => {
            state.topRated = action.payload
        },
        addPopularMovies: (state, action) => {
            state.popular = action.payload
        },
        addUpcomingMovies: (state, action) => {
            state.upcoming = action.payload
        }
    }
})

export const { 
    addNowPlayingMovies, 
    removeNowPlayingMovies, 
    addTrailerVideo, 
    addTopRatedMovies,
    addPopularMovies,
    addUpcomingMovies
} = moviesSlice.actions;

export default moviesSlice.reducer;