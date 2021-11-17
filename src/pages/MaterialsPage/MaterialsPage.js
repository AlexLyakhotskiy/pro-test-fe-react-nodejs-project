import React from 'react';
import LiteratureList from '../../components/Materials/LiteratureList/LiteratureList/LiteratureList';
import ResourcesList from '../../components/Materials/ResoursesList/ResoursesList/ResoursesList';

import Container from '../../components/_shared/Container/Container';

import styles from './MaterialsPage.module.scss';

export default function MaterialsPage() {
  return (
    <div className={styles.aaaa}>
      <div className={styles.bgImg}>
        <Container className={styles.container}>
          <div className={styles.sectionWrapper}>
            <h2 className={styles.titleLit}>Useful literature</h2>
            <div className={styles.listBox}>
              <LiteratureList />
            </div>

            <h2 className={styles.titleRes}>Useful resources</h2>
            <div className={styles.listBox}>
              <ResourcesList />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
