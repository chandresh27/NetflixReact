import React from "react";
import useMovieVideo from "./hooks/useMovieVideo";
import { useSelector } from "react-redux";

const VideoTailer = ({ movieId }) => {
    
    useMovieVideo(movieId);

    const trailerVideo = useSelector((store) => store?.movie?.video);

    if (!trailerVideo) {
        return <div>Loading...</div>;
    }

    return (
        <div className="w-full h-full flex justify-center items-center">
            <iframe
                className="w-full aspect-video"
                src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&loop=1&mute=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default VideoTailer;
