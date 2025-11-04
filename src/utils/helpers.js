export async function getTmdbData(tmdbId) {
  const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${tmdbId}/external_ids?api_key=${TMDB_API_KEY}`
  );
  const data = await res.json();
  return data || null;
}

export async function getTmdbDataFromImdb(imdbId) {
  const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  const res = await fetch(
    `https://api.themoviedb.org/3/find/${imdbId}?api_key=${TMDB_API_KEY}&external_source=imdb_id`
  );
  
  const data = await res.json();
  
  return data
}

export function debounce(func, delay) {
  let timeoutId;

  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay)
  }
}
