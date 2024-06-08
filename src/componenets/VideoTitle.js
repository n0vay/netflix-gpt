import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[25%] px-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="py-6 text-sm w-1/3">{overview}</p>
      <div className="space-x-2">
        <button className="bg-white text-black p-4 w-32 rounded-md font-bold hover:opacity-80">
          ▷ Play
        </button>
        <button className="bg-white text-black p-4 w-32 rounded-md font-bold hover:opacity-80">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
