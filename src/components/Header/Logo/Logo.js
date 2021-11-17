import { Link } from 'react-router-dom';

import { routes } from '../../../routes/routes';

import Svg from '../../_shared/Svg/Svg';

import styles from './Logo.module.scss';

const Logo = () => {
  return (
    <Link to={routes.home}>
      <Svg icon={'logo'} className={styles.logo} />
    </Link>
  );
};

export default Logo;
