import { FaFilm } from 'react-icons/fa';
import styles from './EmptyState.module.css';

const EmptyState = () => {
  return (
    <div className={styles.wrapper}>
      <FaFilm size={36} color="var(--color-text-secondary)" />
      <h3 className={styles.title}>No Movies Found</h3>
      <p className={styles.message}>Try another search.</p>
    </div>
  );
};

export default EmptyState;