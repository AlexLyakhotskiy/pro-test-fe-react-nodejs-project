import React from 'react';

import styles from './AuthDescription.module.scss';

export default function AuthDescription() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Pro Test</h1>
      <p className={styles.description}>
        <span className={styles.boldText}>[ </span>
        We will help you find weak points in knowledge so that you can
        strengthen it. We will show you what is relevant to know for a
        <span className={styles.boldText}> QA Engineer</span> and will try to
        make the learning process more diverse_
        <span className={styles.boldText}> ]</span>
      </p>
    </div>
  );
}
