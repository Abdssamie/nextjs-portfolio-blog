import React from 'react';
import styles from './CardHover.module.css';

interface CardHoverProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const CardHover: React.FC<CardHoverProps> = ({ title, description, icon }) => {
  return (
    <div className={styles.card}>
      <span className={styles.icon}>
        {icon}
      </span>
      <h4>{title}</h4>
      <p>{description}</p>
      <div className={styles.shine}></div>
      <div className={styles.background}>
        <div className={styles.tiles}>
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className={`${styles.tile} ${styles[`tile-${i + 1}`]}`}></div>
          ))}
        </div>

        <div className={`${styles.line} ${styles['line-1']}`}></div>
        <div className={`${styles.line} ${styles['line-2']}`}></div>
        <div className={`${styles.line} ${styles['line-3']}`}></div>
      </div>
    </div>
  );
};

export const CardGrid: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className={styles.grid}>{children}</div>;
};
