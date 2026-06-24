import { useEffect, useState } from "react";

export function useFetch(url: string, options?: RequestInit) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        try {
            fetch(import.meta.env.BASE_URL + url, { ...options, signal }).then(response => {
                setData(response.json());
            });

        } catch (err) {
            if (err.name === "AbortError") {
                console.log("Fetch aborted");
            } else {
                setError(err);
            }
        } finally {
            setLoading(false);
        }

        return () => {
            controller.abort();
        };

    }, [url, options]);

    return [data, loading, error];
}