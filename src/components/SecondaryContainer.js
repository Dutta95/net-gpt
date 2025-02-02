import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryCotainer = () => {
    const moviesStore = useSelector(store => store.movies);

    return (
        <div className="pt-10 bg-black">
            <MovieList title="Now Playing" movies={moviesStore.nowPlaying}/>
            <MovieList title="Top Rated" movies={moviesStore.topRated}/>
            <MovieList title="Popular Movies" movies={moviesStore.popular}/>
            <MovieList title="Upcomming Movies" movies={moviesStore.upcoming}/>
        </div>
    )
}

export default SecondaryCotainer;