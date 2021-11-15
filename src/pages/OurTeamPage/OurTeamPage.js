import React from 'react';

import Container from '../../components/_shared/Container/Container';

// import Sasha from '../../images/Sasha.jpg';
// import Dima from '../../images/Dima.jpg';
// import Alina from '../../images/Alina.jpg';

import styles from './OurTeamPage.Module.scss';

const teamArr = [
  {
    nameEn: 'Alexander Lyakhotskiy',
    position: 'Team lead',
    // preview: Sasha,
    linkedin: 'https://www.linkedin.com/in/alexander-lyakhotskiy-a64904155/',
    github: 'https://github.com/AlexLyakhotskiy',
  },
  {
    nameEn: 'Dmitry Ignatev ',
    position: 'Full-Stack developer, Scrum master',
    // preview: Dima,
    linkedin: 'https://www.linkedin.com/in/дмитрий-игнатьев-b83395a0/',
    github: 'https://github.com/IgnatevD',
  },
  {
    nameEn: 'Alina Oksentiuk',
    position: 'Full-Stack developer',
    // preview: Alina,
    linkedin: '#',
    github: 'https://github.com/mandarinka99',
  },
];

export default function OurTeamPage() {
  return (
    <Container className={styles}>
      <h1 className={styles}>Our team</h1>
      <ul className={styles}>

      </ul>
    </Container>
  );
}
