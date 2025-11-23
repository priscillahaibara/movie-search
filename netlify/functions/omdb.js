export async function handler(event, context) {
  const { type, query, id } = event.queryStringParameters;
  const OMDB_API_KEY = process.env.OMDB_API_KEY;

  try {
    let url = "";

    switch (type) {
      case "search":
        if (!query) return { statusCode: 400, body: "Query is required" };
        url = `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${query}`;
        break;

      case "details":
        if (!id) return { statusCode: 400, body: "ID is required" };
        url = `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${id}`;
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
