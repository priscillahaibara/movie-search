export const genreMap = {
  movie: {
    action: 28,
    comedy: 35,
    drama: 18,
    horror: 27,
    romance: 10749,
  },
  tv: {
    action: 10759,
    comedy: 35,
    drama: 18,
  },
};


export async function getTmdbData(tmdbId) {
  const res = await fetch(
    `/.netlify/functions/tmdb?type=fromTmdb&tmdbId=${tmdbId}`
  );
  return res.json();
}


export async function getTmdbDataFromImdb(imdbId) {
  const res = await fetch(
    `/.netlify/functions/tmdb?type=fromImdb&imdbId=${imdbId}`
  );
  return res.json();
}


export function debounce(func, delay) {
  let timeoutId;


  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}


export function capitalizeFirstLetter(string) {
  if (!string) return "";
  return string.charAt(0).toUpperCase() + string.slice(1);
}


export function loadMovie() {
  const savedMovies = JSON.parse(localStorage.getItem("favorites")) || [];
  return savedMovies;
}


export function saveMovie(movie) {
  const savedMovies = loadMovie();
  const isDuplicate = savedMovies.includes(movie.imdbID);


  let updatedMovies;


  if (!isDuplicate) {
    updatedMovies = [...savedMovies, movie.imdbID];
  } else {
    updatedMovies = savedMovies.filter((id) => id !== movie.imdbID);
  }


  localStorage.setItem("favorites", JSON.stringify(updatedMovies));
}