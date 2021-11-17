import Svg from '../_shared/Svg/Svg';

import Alexander from '../../icons/teamPhoto/Alexander.jpg';
import Alina from '../../icons/teamPhoto/Alina.jpg';
import Dima from '../../icons/teamPhoto/Dima.jpg';
import Andrey from '../../icons/teamPhoto/Andrey.jpg';

import styles from './Team.module.scss';

const teamArr = [
  {
    nameEn: 'Alexander Lyakhotskiy',
    position: 'Team lead',
    preview: Alexander,
    linkedin: 'https://www.linkedin.com/in/alexander-lyakhotskiy-a64904155/',
    github: 'https://github.com/AlexLyakhotskiy',
  },
  {
    nameEn: 'Dmitry Ignatev ',
    position: 'Full-Stack developer, Scrum master',
    preview: Dima,
    linkedin: 'https://www.linkedin.com/in/дмитрий-игнатьев-b83395a0/',
    github: 'https://github.com/IgnatevD',
  },
  {
    nameEn: 'Alina Oksentiuk',
    position: 'Full-Stack developer',
    preview: Alina,
    linkedin: '#',
    github: 'https://github.com/mandarinka99',
  },
];

const Team = () => {
  return (
    <section className={styles.sectionWrapper}>
      <h2 className={styles.title}>Our team</h2>
      <span className={styles.borderLine}></span>
      <ul className={styles.teamList}>
        {teamArr.map(({ nameEn, preview, position, github, linkedin }) => (
          <li className={styles.teamItem} key={github}>
            <img className={styles.photo} src={preview} alt={nameEn} />
            <div className={styles.desc}>
              <h3 className={styles.name}>{nameEn}</h3>
              <p className={styles.position}>{position}</p>
              <ul className={styles.listLink}>
                <li className={styles.itemLink}>
                  <a
                    href={github}
                    className={styles.iconLink}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Svg icon="github" className={styles.icon} />
                  </a>
                </li>

                <li className={styles.itemLink}>
                  <a
                    href={linkedin}
                    className={styles.iconLink}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Svg icon="linkedin" className={styles.icon} />
                  </a>
                </li>
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Team;
