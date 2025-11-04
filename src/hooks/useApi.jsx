import { useEffect, useState } from "react";

export default function useApi(url, transform) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!url) return;

    const controller = new AbortController();

    async function fetchData() {
      setIsLoading(true);
      setError(null);
      setData([]);

      try {
        const res = await fetch(url, { signal: controller.signal });
        if (!res.ok) throw new Error(`Error: ${res.status}`);
        const json = await res.json();
        setData(transform ? transform(json) : json);
      } catch (err) {
        if (err.name !== "Abort Error") setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
    return () => controller.abort();
  }, [url, transform]);

  return { data, error, isLoading };
}
