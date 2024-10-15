const VideoTitle = ({ title, overview }) => {
    return (
        <div className="aspect-video pt-48 px-10 absolute text-white bg-gradient-to-r from-black">
            <h1 className="font-bold text-2xl">{title}</h1>
            <p className="w-1/3 text-sm">{overview}</p>
            <div className="pt-8 mt-20">
                <button className="bg-slate-200 p-2 text-slate-700 hover:bg-slate-300 rounded-sm">Play now ▶️</button>
                <button className="bg-slate-400 mx-8 p-2 hover:bg-slate-500 rounded-sm">🖌️More info</button>
            </div>
        </div>
    )
}

export default VideoTitle;