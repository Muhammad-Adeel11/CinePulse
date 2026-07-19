import { FaFilm, FaSearch } from 'react-icons/fa';
import styles from './Navbar.module.css';

const Navbar = ({ searchTerm, onSearchChange }) => {
  return (
    <header className={styles.navbar}>
      <div className={`${styles.inner} container`}>
        <div className={styles.logo}>
          <FaFilm size={22} color="var(--color-accent)" />
          <span>
            Cine<span className={styles.highlight}>Pulse</span>
          </span>
        </div>

        <div className={styles.searchWrap}>
          <FaSearch className={styles.searchIcon} size={14} />
          <input
            type="text"
            placeholder="Search movies..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className={styles.searchInput}
            aria-label="Search movies"
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;