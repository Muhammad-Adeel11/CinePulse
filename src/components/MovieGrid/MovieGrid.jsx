import MovieCard from '../MovieCard/MovieCard';
import styles from './MovieGrid.module.css';

const MovieGrid = ({ movies, onViewDetails }) => {
  return (
    <div className={styles.grid}>
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} onViewDetails={onViewDetails} />
      ))}
    </div>
  );
};

export default MovieGrid;