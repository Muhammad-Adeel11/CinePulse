import { useState, useEffect, useMemo } from 'react';
import { FaSearch } from 'react-icons/fa';
import { debounce } from '../../utils/debounce';
import styles from './SearchBar.module.css';

const SearchBar = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState('');

  // useMemo ensures the debounced function isn't recreated on every render
  const debouncedSearch = useMemo(() => debounce(onSearch, 500), [onSearch]);

  useEffect(() => {
    debouncedSearch(inputValue);
  }, [inputValue, debouncedSearch]);

  return (
    <div className={styles.wrapper}>
      <FaSearch className={styles.icon} size={16} />
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Try 'Inception', 'Breaking Bad'..."
        className={styles.input}
        aria-label="Search movies by title"
      />
    </div>
  );
};

export default SearchBar;