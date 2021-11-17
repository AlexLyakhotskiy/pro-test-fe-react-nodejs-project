import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.scss';
import { routes } from '../../routes/routes.js';
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
            <Link to={routes.test} className={styles.link}>
              <p className={styles.text}>QA technical training</p>
            </Link>
          </div>
          <div className={styles.blokTemaTest}>
            <Link to={routes.test} className={styles.link}>
              <p className={styles.text}>Testing theory</p>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}
