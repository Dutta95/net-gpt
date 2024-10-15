import { useEffect, useState } from "react";
import { API_OPTIONS } from "./constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "./moviesSlice";

const useNowPlayingMovies = () => {
        const [nowPlayingMovies, setNowPlayingMovies] = useState(null);
        const dispatch = useDispatch();
        const asyncData = async () => {
            const res = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", API_OPTIONS);
            const jsonData = await res.json();
            setNowPlayingMovies(jsonData.results);
            dispatch(addNowPlayingMovies(jsonData.results))
        }

        useEffect(() => {
            asyncData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [])

        return nowPlayingMovies;
}

export default useNowPlayingMovies;