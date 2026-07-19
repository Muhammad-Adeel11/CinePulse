import { filterOptions } from '../../constants/filters';
import styles from './Filter.module.css';

const Filter = ({ activeFilter, onFilterChange }) => {
  return (
    <div className={styles.filterGroup} role="group" aria-label="Filter movies by type">
      {filterOptions.map((option) => (
        <button
          key={option.value}
          className={`${styles.filterBtn} ${activeFilter === option.value ? styles.active : ''}`}
          onClick={() => onFilterChange(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default Filter;