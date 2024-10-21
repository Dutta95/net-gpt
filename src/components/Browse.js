import Header from "./Header";
import useNowPlayingMovies from "../utils/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer"
import useGetTopRatedMovies from "../utils/useGetTopRatedMovies";
import useGetPopularMovies from "../utils/useGetPopularMovies";
import useGetUpcomingMovies from "../utils/useGetUpcomingMovies";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";

const Browse = () => {
    const storeSearchStatus = useSelector(store => store.gpt.gptSearchStatus)

    useNowPlayingMovies();
    useGetTopRatedMovies();
    useGetPopularMovies();
    useGetUpcomingMovies();
    
    return (
        <div>
            <Header />
            {
                storeSearchStatus ? <GptSearch /> : (
                    <>
                       <MainContainer />
                       <SecondaryContainer />
                    </>
                )
            }
        </div>
    )
}

export default Browse;