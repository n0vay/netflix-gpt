import React, { useRef } from "react";
import openai from "../utils/openaiInit";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query: " +
      searchText.current.value +
      ". Only give me names of 5 movies. Example Result: Gadar, Sholay, Don, Zindagi na milegi dobara, Golmaal";
    // Make an API call to OPEN AI
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    if (!gptResults.choices) {
      //TODO: Write Error Handling
    }
    const gptMovies = gptResults.choices?.[0]?.message?.content.split("\n");
    const gptMovieResults = gptMovies.map((movie) =>
      movie.replace(/^\d+\.\s*/, "")
    );
    const promiseArray = gptMovieResults.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);
    dispatch(
      addGptMovieResult({
        movieNames: gptMovieResults,
        movieResults: tmdbResults,
      })
    );
  };

  // search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    console.log(movie);
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center ">
      <form
        className=" w-11/12 md:w-1/2 bg-black grid grid-cols-12 rounded-md"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder="What would you like to watch today?"
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-md"
          onClick={handleGptSearchClick}
        >
          Search
        </button>{" "}
      </form>
    </div>
  );
};

export default GptSearchBar;
