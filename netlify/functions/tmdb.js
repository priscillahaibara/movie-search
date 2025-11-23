export async function handler(event, context) {
  const { type, media, id, genreId, page, tmdbId, imdbId } =
    event.queryStringParameters;
  const TMDB_API_KEY = process.env.TMDB_API_KEY;

  try {
    let url = "";

    switch (type) {
      case "topRated":
        url = `https://api.themoviedb.org/3/${media}/top_rated?api_key=${TMDB_API_KEY}&page=${
          page || 1
        }`;
        break;

      case "byGenre":
        url = `https://api.themoviedb.org/3/discover/${media}?api_key=${TMDB_API_KEY}&with_genres=${genreId}&page=${
          page || 1
        }`;
        break;

      case "latest":
        url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${TMDB_API_KEY}&language=en-US&page=1`;
        break;

      case "credits":
        url = `https://api.themoviedb.org/3/${media}/${id}/credits?api_key=${TMDB_API_KEY}`;
        break;

      case "fromTmdb":
        url = `https://api.themoviedb.org/3/movie/${tmdbId}?api_key=${TMDB_API_KEY}`;
        break;

      case "fromImdb":
        url = `https://api.themoviedb.org/3/find/${imdbId}?api_key=${TMDB_API_KEY}&external_source=imdb_id`;
        break;

      default:
        return { statusCode: 400, body: "Invalid type" };
    }

    const res = await fetch(url);
    const data = await res.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
}
