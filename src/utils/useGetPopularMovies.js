import { useEffect } from 'react'
import { API_OPTIONS } from './constants'
import { useDispatch } from 'react-redux'
import { addPopularMovies } from './moviesSlice';

const useGetPopularMovies = () => {
    const dispath = useDispatch();

    const popularMovies = async () => {
        const res = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", API_OPTIONS);
        const jsonData = await res.json();
        console.log("popular =>", jsonData);
        dispath(addPopularMovies(jsonData.results));
    }

    useEffect(() => {
        popularMovies()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
}

export default useGetPopularMovies
