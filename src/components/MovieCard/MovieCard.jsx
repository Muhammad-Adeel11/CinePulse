import { FaStar } from 'react-icons/fa';
import styles from './MovieCard.module.css';

// OMDb returns the literal string "N/A" when no poster exists — fallback to a placeholder
const FALLBACK_POSTER =
  'https://via.placeholder.com/300x445/1E293B/94A3B8?text=No+Poster';

const MovieCard = ({ movie, onViewDetails }) => {
  const poster = movie.Poster && movie.Poster !== 'N/A' ? movie.Poster : FALLBACK_POSTER;

  return (
    <article className={styles.card}>
      <div className={styles.posterWrap}>
        <img
          src={poster}
          alt={`${movie.Title} poster`}
          className={styles.poster}
          loading="lazy"
        />
        <span className={styles.typeTag}>{movie.Type}</span>
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{movie.Title}</h3>

        <div className={styles.meta}>
          <span className={styles.year}>{movie.Year}</span>
          {movie.imdbRating && movie.imdbRating !== 'N/A' && (
            <span className={styles.rating}>
              <FaStar size={12} color="var(--color-accent-secondary)" />
              {movie.imdbRating}
            </span>
          )}
        </div>

        <button
          className={styles.detailsBtn}
          onClick={() => onViewDetails(movie.imdbID)}
        >
          View Details
        </button>
      </div>
    </article>
  );
};

export default MovieCard;