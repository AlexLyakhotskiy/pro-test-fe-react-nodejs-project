import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.scss';
import { routes } from '../../routes/routes.js';
import Container from '../../components/_shared/Container/Container';
import Svg from '../../components/_shared/Svg/Svg';

export default function HomePage() {
  return (
    <Container>
      <div className={styles.containerHomePage}>
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
            <Link
              to={{ pathname: routes.test, nameTest: 'QA technical training' }}
              className={styles.link}
            >
              <p className={styles.text}>
                QA technical <span> training</span>
              </p>
              <Svg icon={'arrow'} className={styles.btnArrow} />
            </Link>
          </div>
          <div className={styles.blokTemaTest}>
            <Link
              to={{
                pathname: routes.test,
                nameTest: 'Testing theory',
              }}
              className={styles.link}
            >
              <p className={styles.text}>
                Testing <span> theory</span>
              </p>
              <Svg icon={'arrow'} className={styles.btnArrow} />
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}
