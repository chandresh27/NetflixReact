import React from "react";
import { IMG_URL } from "../utils/contants.js";

const MovieCard = ({ backdrop_path, title }) => {
  if (!backdrop_path) return null;
  
  return (
    <div className="flex-shrink-0 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 w-40 sm:w-48 md:w-56 lg:w-60">
      <img
        src={IMG_URL + backdrop_path}
        alt="Movie Poster"
        className="w-full object-cover"
      />
      <div className="p-2 sm:p-3 md:p-4">
        <h3 className="text-xs sm:text-sm md:text-base font-medium text-white">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default MovieCard;
