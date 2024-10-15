import Header from "./Header";
import useNowPlayingMovies from "../utils/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer"
import useGetTopRatedMovies from "../utils/useGetTopRatedMovies";
import useGetPopularMovies from "../utils/useGetPopularMovies";
import useGetUpcomingMovies from "../utils/useGetUpcomingMovies";

const Browse = () => {

    useNowPlayingMovies();
    useGetTopRatedMovies();
    useGetPopularMovies();
    useGetUpcomingMovies();
    
    return (
        <div>
            <Header />
            <MainContainer />
            <SecondaryContainer />
        </div>
    )
}

export default Browse;