import { FaExclamationTriangle, FaRedo } from 'react-icons/fa';
import styles from './ErrorCard.module.css';

const ErrorCard = ({ message, onRetry }) => {
  return (
    <div className={styles.wrapper} role="alert">
      <FaExclamationTriangle size={36} color="var(--color-accent)" />
      <h3 className={styles.title}>Oops!</h3>
      <p className={styles.message}>
        {message || 'Unable to fetch movies. Please try again.'}
      </p>
      {onRetry && (
        <button className={styles.retryBtn} onClick={onRetry}>
          <FaRedo size={13} />
          Retry
        </button>
      )}
    </div>
  );
};

export default ErrorCard;