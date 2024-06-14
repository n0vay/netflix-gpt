import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggetions from "./GptMovieSuggetions";
import { DEFAULTBACKGROUND } from "../utils/constants";

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img
          className="h-screen object-cover"
          src={DEFAULTBACKGROUND}
          alt="background"
        />
      </div>
      <div>
        <GptSearchBar />
        <GptMovieSuggetions />
      </div>
    </>
  );
};

export default GptSearch;
