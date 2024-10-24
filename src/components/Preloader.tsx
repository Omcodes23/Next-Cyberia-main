// components/Preloader.tsx
import React from 'react';
import styles from '../styles/Preloader.module.css';

const Preloader: React.FC = () => {
  return (
    <div className={styles.preloader}>
      {/* You can replace the text below with an image/gif or any other animation */}
      <img src="/preloader.gif" alt="Loading..." className={styles.preloaderImage} />
      <p>Loading...</p>
    </div>
  );
};

export default Preloader;
