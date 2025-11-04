export async function getImdbIdFromTmdb(tmdbId) {
  const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${tmdbId}/external_ids?api_key=${TMDB_API_KEY}`
  );
  const data = await res.json();
  return data.imdb_id || null;
}

export async function getTmdbIdFromImdb(imdbId) {
  const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  const res = await fetch(
    `https://api.themoviedb.org/3/find/${imdbId}?api_key=${TMDB_API_KEY}&external_source=imdb_id`
  );
  
  const data = await res.json();
  
  return data
}
