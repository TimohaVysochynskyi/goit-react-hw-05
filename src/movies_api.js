import axios from "axios";

const url =
  "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1";

const options = {
  headers: {
    Authorization:
      "Barear: eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiODdiYmRlZGJhOTM4NTk1ZTBhYjhhNGM1Mjg1ZTA4MSIsInN1YiI6IjY2NTk4NDUwOWVmNDcxOGFlNjk0MGQ2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JHQZS2m-f3fHFWSEu5MSR02Liqjwt5r9F6WYYBQfAyE",
  },
};

axios
  .get(url, options)
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
