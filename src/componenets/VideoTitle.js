import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[15%] md:pt-[25%] px-5 md:px-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-xl md:text-4xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-sm w-1/3">{overview}</p>
      <div className="space-x-2 pt-5 md:pt-0">
        <button className="bg-white text-black py-1 md:py-4 px-3 md:px-12 rounded-md font-bold hover:opacity-80">
          ▷ Play
        </button>
        <button className="hidden md:inline-block bg-white text-black p-4 w-32 rounded-md font-bold hover:opacity-80">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
