import axios from "axios";

const baseUrl = "https://api.themoviedb.org/3/";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiODdiYmRlZGJhOTM4NTk1ZTBhYjhhNGM1Mjg1ZTA4MSIsInN1YiI6IjY2NTk4NDUwOWVmNDcxOGFlNjk0MGQ2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JHQZS2m-f3fHFWSEu5MSR02Liqjwt5r9F6WYYBQfAyE",
  },
};

export const fetchTrendingMovies = async () => {
  return axios.get(`${baseUrl}trending/movie/day?language=en-US`, options);
};

export const fetchMoviesByName = async (name) => {
  return axios.get(
    `${baseUrl}search/movie?include_adult=false&language=en-US&page=1&query=${name}`,
    options
  );
};

export const fetchMovieDetails = async (id) => {
  return axios.get(`${baseUrl}movie/${id}?language=en-US`, options);
};

export const fetchMovieCast = async (id) => {
  return axios.get(`${baseUrl}movie/${id}/credits?language=en-US`, options);
};

export const fetchMovieReviews = async (id) => {
  return axios.get(
    `${baseUrl}movie/${id}/reviews?language=en-US&page=1`,
    options
  );
};
