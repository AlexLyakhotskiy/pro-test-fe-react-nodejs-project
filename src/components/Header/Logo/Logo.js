import { Link } from 'react-router-dom';
import sprite from '../sprite.svg';

import styles from './Logo.module.scss';

const Logo = () => {
  return (
    <Link to="/">
      <svg className={styles.logo}>
        <use href={sprite + '#icon-logo'} />
      </svg>
    </Link>
  );
};

export default Logo;
