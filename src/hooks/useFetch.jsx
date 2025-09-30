import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!url || url.trim().length < 3) return;

    const controller = new AbortController();
    const signal = controller.signal;
    setData([]);
    setIsLoading(true);
    setError(null);

    fetch(url, { signal })
      .then((response) => {
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        return response.json();
      })
      .then((json) => {
        if (json.Response === "False") {
          throw new Error(json.Error) || "Unknown API error";
        }
        setData(json.Search || []);
        console.log(json);
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          setError(err.message);
          console.log(err.message);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });

    return () => controller.abort();
  }, [url]);

  return { data, error, isLoading };
}

export default useFetch;
