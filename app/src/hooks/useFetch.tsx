import { useEffect, useState } from "react";

export function useFetch<ResponseData>(url: string, options?: RequestInit): [ResponseData | null, boolean, unknown | null] {
    const [data, setData] = useState<ResponseData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        try {
            fetch(import.meta.env.BASE_URL + url, { ...options, signal }).then(async response => {
                setData(await response.json());
            });

        } catch (err) {
            if (err instanceof Error && err.name === "AbortError") {
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