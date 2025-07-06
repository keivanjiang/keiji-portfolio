import React from 'react';
import styles from './Badge.module.css';

function Badge({ text }) {
    return <span className={styles.badge}>{text}</span>;
}

export default Badge;
