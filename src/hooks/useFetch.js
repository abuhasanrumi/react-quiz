import { useEffect, useState } from 'react';

function useFetch(url, method, headers) {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [result, setResult] = useState(null)

    useEffect(() => {
        async function requestFetch() {
            try {
                setLoading(true)
                setError(false)
                const response = await fetch(url, {
                    method: method || "GET",
                    headers: headers,
                });
                const data = await response.json();
                setLoading(false)
                setResult(data)
                console.log(data)
            } catch (err) {
                console.log(err)
                setLoading(false)
                setError(true)
            }
        }
        requestFetch()
    }, [])


    return { loading, error, result }
}

export default useFetch