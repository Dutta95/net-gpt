import { useSelector } from "react-redux"
import useGetMovieVideos from "../utils/useGetMovieVideos"

const VideoBackground = ({movieId}) => {
    const trailer = useSelector(store => store.movies?.trailerVideo);
    useGetMovieVideos(movieId);
    
    return (
        <div className="max-w-screen-sm">
            <iframe
                className="w-screen aspect-video" 
                autoPlay="1"
                src={"https://www.youtube.com/embed/"+trailer?.key+"?&autoplay=1&mute=1"}
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin"
            >

            </iframe>
        </div>
    )
}

export default VideoBackground