import React from 'react';
import styles from './ProjectCard.module.css';
import Badge from './Badge';

function ProjectCard({ title, image, description, stack = [], link }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={title} />
      </div>

      <div className={styles.content}>
        <div className={styles.titleRow}>
          <h2>{title}</h2>
          <div className={styles.badges}>
            {stack.map((tech, index) => (
              <Badge key={index} text={tech} />
            ))}
          </div>
        </div>

        <p className={styles.description}>{description}</p>

        <div className={styles.cta}>
          <a href={link} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
