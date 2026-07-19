import { useState, useRef } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import Filter from '../../components/Filter/Filter';
import MovieGrid from '../../components/MovieGrid/MovieGrid';
import SkeletonCard from '../../components/SkeletonCard/SkeletonCard';
import ErrorCard from '../../components/ErrorCard/ErrorCard';
import EmptyState from '../../components/EmptyState/EmptyState';
import Footer from '../../components/Footer/Footer';
import { useMovies } from '../../hooks/useMovies';
import styles from './Home.module.css';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('star'); // sensible default so the grid isn't empty on first load
  const [filterType, setFilterType] = useState('');
  const movieGridRef = useRef(null);

  const { movies, loading, error } = useMovies(searchTerm, filterType);

  const handleViewDetails = (imdbID) => {
    // Kept simple on purpose — opens the official IMDb page in a new tab.
    // A full detail modal/page could be added later using getMovieDetails() from the API layer.
    window.open(`https://www.imdb.com/title/${imdbID}`, '_blank', 'noopener,noreferrer');
  };

  const scrollToResults = () => {
    movieGridRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const renderContent = () => {
    if (loading) {
      return (
        <div className={styles.grid}>
          {Array.from({ length: 10 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      );
    }

    if (error) {
      return <ErrorCard message={error} onRetry={() => setSearchTerm((prev) => prev + '')} />;
    }

    if (!searchTerm.trim()) {
      return <EmptyState />;
    }

    if (movies.length === 0) {
      return <EmptyState />;
    }

    return <MovieGrid movies={movies} onViewDetails={handleViewDetails} />;
  };

  return (
    <>
      <Navbar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <Hero onExploreClick={scrollToResults} />

      <main className={`${styles.main} container`} ref={movieGridRef}>
        <Filter activeFilter={filterType} onFilterChange={setFilterType} />
        <div className={styles.results}>{renderContent()}</div>
      </main>

      <Footer />
    </>
  );
};

export default Home;