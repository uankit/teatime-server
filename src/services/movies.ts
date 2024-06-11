import axios from "axios";
import dotenv from "dotenv";
import { mapToMoviesData } from "../models/IMovie";
import { getTenRandomIMDBId } from "../utils";

dotenv.config();

export const getMultiple = async () => {
  try {
    const ids = getTenRandomIMDBId();
    const response = ids.map((id) =>
      axios.get(
        `http://www.omdbapi.com/?i=tt${id}&plot=short&apikey=${process.env.OMDB_API_KEY}`
      )
    );
    const movies = await Promise.all(response);
    const responses = movies.map((response) => mapToMoviesData(response.data));
    const filteredReponse = responses
      .filter((movie) => {
        const wordsInTitle = movie.title.split(" ");
        return wordsInTitle.length <= 3;
      })
      .map((movie) => {
        return {
          ...movie,
          title: movie.title.replace(/[^a-zA-Z0-9\s]/g, ""),
        };
      });

    return filteredReponse;
  } catch (error) {
    console.log(error);
  }
};
