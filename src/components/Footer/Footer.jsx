import { FaFilm, FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`${styles.inner} container`}>
        <div className={styles.brand}>
          <FaFilm size={16} color="var(--color-accent)" />
          <span>CinePulse</span>
        </div>

        <p className={styles.credit}>
          Built by <strong>Muhmmad Adeel</strong> &middot; Powered by OMDb API
        </p>

        <div className={styles.socials}>
          <a href="https://github.com/Muhammad-Adeel11" aria-label="GitHub profile">
            <FaGithub size={16} />
          </a>
          <a href="https://www.linkedin.com/in/muhammad-adeel-b4874033a/" aria-label="LinkedIn profile">
            <FaLinkedin size={16} />
          </a>
        </div>
      </div>

      <p className={styles.copyright}>© {currentYear} Movie Explorer. All rights reserved.</p>
    </footer>
  );
};

export default Footer;