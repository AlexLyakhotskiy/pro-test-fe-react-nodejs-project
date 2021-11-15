import React from 'react';
import styles from './HomePage.module.scss';
import Container from '../../components/_shared/Container/Container';

export default function HomePage() {
  return (
    <Container>
      <div>
      <h1 className={styles.title}>
          “Regression testing. What is it? If the system compiles, that's good,
          if it boots, that's great!”
        </h1>

        <p className={styles.nameTest}>Linus Torvalds</p>
        <p className={styles.descriptionTest}>
          Linux kernel creator, hacker, 1969
        </p>
        <div className={styles.conteinerTest}>
          <div className={styles.blokTema}>
            <p className={styles.text}>QA technical training</p>
          </div>
          <div className={styles.blokTemaTest}>
            <p className={styles.text}>QA technical training</p>
          </div>
        </div>
      </div>
    </Container>
  );
}
