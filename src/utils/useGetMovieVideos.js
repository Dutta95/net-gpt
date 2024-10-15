import { useEffect } from "react";
import { API_OPTIONS } from "./constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "./moviesSlice";

const useGetMovieVideos = (id) => {
    const dispatch = useDispatch();
    const getMovieVideos = async () => {
        const videos = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, API_OPTIONS);
        const jsonData = await videos.json();
        const filteredData = jsonData?.results?.filter(item => item.type === "Trailer")
        const trailer = filteredData?.length ? filteredData[0] : videos[0];
        dispatch(addTrailerVideo(trailer))
    }
    
    useEffect(() => {
        getMovieVideos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
}

export default useGetMovieVideos;