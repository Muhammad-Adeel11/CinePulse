import { useState, useEffect } from 'react';
import { searchMovies } from '../api/movieApi';

/**
 * Fetches movies from OMDb whenever `query` or `type` changes.
 * Returns everything a component needs to render all four UI states:
 * loading, error, empty, and success.
 */
export const useMovies = (query, type) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Don't fetch anything until the user has typed something
    if (!query.trim()) {
      setMovies([]);
      setError(null);
      return;
    }

    let isCancelled = false; // prevents a late response from overwriting a newer one

    const fetchMovies = async () => {
      setLoading(true);
      setError(null);

      try {
        const results = await searchMovies(query, type);
        if (!isCancelled) {
          setMovies(results);
        }
      } catch (err) {
        if (!isCancelled) {
          setError(err.message);
          setMovies([]);
        }
      } finally {
        if (!isCancelled) {
          setLoading(false);
        }
      }
    };

    fetchMovies();

    return () => {
      isCancelled = true;
    };
  }, [query, type]);

  return { movies, loading, error };
};