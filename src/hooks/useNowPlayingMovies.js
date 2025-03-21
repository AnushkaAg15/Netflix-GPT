import { useEffect } from "react";
import { API_OPTIONS, MOVIES_LIST_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const fetchMoviesList = async () => {
    const data = await fetch(MOVIES_LIST_URL, API_OPTIONS);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };
  useEffect(() => {
    fetchMoviesList();
  }, []);
};

export default useNowPlayingMovies;
