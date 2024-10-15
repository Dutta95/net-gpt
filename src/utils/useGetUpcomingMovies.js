import { useEffect } from 'react'
import { API_OPTIONS } from './constants';
import { useDispatch } from 'react-redux';
import { addUpcomingMovies } from './moviesSlice';

const useGetUpcomingMovies = () => {
    const dispatch = useDispatch();

    const upcomingMovies = async () => {
        const res = await fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1", API_OPTIONS);
        const jsonData = await res.json();
        console.log("upcoming =>", jsonData);
        dispatch(addUpcomingMovies(jsonData.results))
    }

    useEffect(() => {
        upcomingMovies()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
}

export default useGetUpcomingMovies
