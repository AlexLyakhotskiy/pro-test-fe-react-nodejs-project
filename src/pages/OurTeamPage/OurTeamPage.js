import React from 'react';
import Team from '../../components/Team/Team';

import Container from '../../components/_shared/Container/Container';

// import Sasha from '../../images/Sasha.jpg';
// import Dima from '../../images/Dima.jpg';
// import Alina from '../../images/Alina.jpg';

import styles from './OurTeamPage.Module.scss';

export default function OurTeamPage() {
  return (
    <Container className={styles}>
      <Team />
    </Container>
  );
}
