import React from 'react';
import { Link } from 'react-router-dom';

import Container from '../../components/_shared/Container/Container';

import { routes } from '../../routes/routes';

import styles from './NotFoundPage.module.scss';

export default function NotFoundPage() {
  return (
    <Container className={styles.container}>
      <div className={styles.wrapper}>
        <h1>404 Oh! Page not found</h1>
        <Link to={routes.auth} className={styles.link}>
          Maybe you're lost? Click to return to the site.
        </Link>
      </div>
    </Container>
  );
}
