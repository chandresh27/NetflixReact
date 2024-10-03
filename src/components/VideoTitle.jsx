import React from 'react';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full aspect-video flex flex-col justify-center items-start p-8 md:p-16 absolute text-white bg-gradient-to-r from-black via-transparent">
      <h1 className="text-2xl md:text-4xl font-bold mb-4">{title}</h1>
      <p className="w-full md:w-2/3 lg:w-1/2 text-sm md:text-base mt-4 mb-8">{overview}</p>
      <div>
        <button className="bg-white text-black px-6 py-2 rounded hover:bg-opacity-80 transition-colors">
          ▶ Play
        </button>
        <button className="bg-white text-black px-4 py-2 ml-4 rounded hover:bg-opacity-80 transition-colors">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
