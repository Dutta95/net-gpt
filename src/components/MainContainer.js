import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground"
import { useSelector } from "react-redux";

const MainContainer = () => {
    const nowplaying = useSelector((store) => store.movies.nowPlaying);
    if (!nowplaying) return;
    const { title, overview, id } = nowplaying[1]

    return (
        <div className="pt-16">
            <VideoTitle title={title} overview={overview}/>
            <VideoBackground movieId={id}/>
        </div>
    )
}

export default MainContainer