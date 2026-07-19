import { FaPlay } from 'react-icons/fa';
import styles from './Hero.module.css';

const Hero = ({ onExploreClick }) => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />
      <div className={`${styles.content} container`}>
        <h1 className={styles.heading}>
          Discover Your Next <span>Favorite Movie</span>
        </h1>
        <p className={styles.description}>
          Search thousands of movies, series, and episodes. Powered by real-time
          data from the OMDb database.
        </p>
        <button className={styles.cta} onClick={onExploreClick}>
          <FaPlay size={13} />
          Start Exploring
        </button>
      </div>
    </section>
  );
};

export default Hero;