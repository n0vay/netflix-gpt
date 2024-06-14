import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

function SecondaryContainer() {
  const movies = useSelector((store) => store.movies);
  return (
    <div className=" bg-black">
      <div className="mt-0 pl-4 md:-mt-44 md:pl-12 relative z-20">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Trending"} movies={movies.nowPlayingMovies} />
      </div>
    </div>
  );
}

export default SecondaryContainer;
