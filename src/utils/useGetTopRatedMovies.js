import { useEffect } from 'react'
import { API_OPTIONS } from './constants';
import { useDispatch } from 'react-redux';
import { addTopRatedMovies } from './moviesSlice';

const useGetTopRatedMovies = () => {
    const dispatch = useDispatch();

    const topratedMovies = async () => {
        const res = await fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", API_OPTIONS);
        const jsonData = await res.json();
        dispatch(addTopRatedMovies(jsonData.results))
    }

    useEffect(() => {
        topratedMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
}

export default useGetTopRatedMovies;
