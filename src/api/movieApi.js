import axios from 'axios';

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = 'https://www.omdbapi.com/';

// Creates a reusable axios instance with the base URL and API key pre-attached
const omdbClient = axios.create({
  baseURL: BASE_URL,
  params: {
    apikey: API_KEY,
  },
});

/**
 * Search movies by title, with an optional type filter (movie / series / episode).
 * OMDb's search endpoint returns basic info only (no full plot, no rating) —
 * that's expected, and it's why MovieCard shows Poster / Year / Type / Rating only.
 */
export const searchMovies = async (query, type = '') => {
  const response = await omdbClient.get('', {
    params: {
      s: query,
      type: type || undefined, // omit the param entirely if no filter is selected
    },
  });

  // OMDb returns { Response: "False", Error: "..." } instead of throwing an HTTP error
  if (response.data.Response === 'False') {
    throw new Error(response.data.Error || 'No movies found.');
  }

  return response.data.Search;
};

/**
 * Fetch full details for a single movie by its IMDb ID.
 * Used by the "View Details" button on each MovieCard.
 */
export const getMovieDetails = async (imdbID) => {
  const response = await omdbClient.get('', {
    params: { i: imdbID, plot: 'short' },
  });

  if (response.data.Response === 'False') {
    throw new Error(response.data.Error || 'Movie details not found.');
  }

  return response.data;
};