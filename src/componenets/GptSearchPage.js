import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggetions from "./GptMovieSuggetions";
import { DEFAULTBACKGROUND } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10 w-full bg-black">
        <img className="w-full" src={DEFAULTBACKGROUND} alt="background" />
      </div>

      <GptSearchBar />
      <GptMovieSuggetions />
    </div>
  );
};

export default GptSearch;
