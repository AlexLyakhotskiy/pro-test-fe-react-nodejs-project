import { Link } from 'react-router-dom';
import { routes } from '../../routes/routes';
import Svg from '../_shared/Svg/Svg';

import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer>
      <div className={styles.foterConteiner}>
        <div className={styles.oneStringConteiner}>
          <p className={styles.foterText}>
            © 2021 | All Rights Reserved | Developed with
          </p>
          <Svg icon={'full-heart'} className={styles.iconHeart} />
        </div>
        <div className={styles.stringlink}>
          <span className={styles.spanText}>by</span>
          <Link className={styles.linkTeam} to={{ pathname: routes.ourTeam }}>
            GoIT Students
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
