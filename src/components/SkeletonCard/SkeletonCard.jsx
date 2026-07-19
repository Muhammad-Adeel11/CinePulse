import styles from './SkeletonCard.module.css';

const SkeletonCard = () => {
  return (
    <div className={styles.card} aria-hidden="true">
      <div className={styles.poster} />
      <div className={styles.body}>
        <div className={styles.line} />
        <div className={styles.lineShort} />
        <div className={styles.button} />
      </div>
    </div>
  );
};

export default SkeletonCard;