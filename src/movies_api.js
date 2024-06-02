import axios from "axios";

const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiODdiYmRlZGJhOTM4NTk1ZTBhYjhhNGM1Mjg1ZTA4MSIsInN1YiI6IjY2NTk4NDUwOWVmNDcxOGFlNjk0MGQ2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JHQZS2m-f3fHFWSEu5MSR02Liqjwt5r9F6WYYBQfAyE",
  },
};
export const fetchTrendingMovies = async () => {
  return axios.get(url, options);
};
