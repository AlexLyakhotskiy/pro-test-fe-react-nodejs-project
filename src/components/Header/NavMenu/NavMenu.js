import { NavLink } from 'react-router-dom';
import styles from './NavMenu.module.scss';
import sprite from '../sprite.svg';

const NavMenu = props => {
  const isLoggedIn = true;
  console.log(`object`, props);
  const { width, breakPoint } = props;

  return (
    <div className={styles.headerWrapper}>
      <nav className={styles.headerNav}>
        {isLoggedIn && (
          <div className={styles.headerUserNav}>
            <NavLink exact to="/" className={styles.headerNavLink}>
              Home
            </NavLink>
            <NavLink to="/useful-info" className={styles.headerNavLink}>
              Materials
            </NavLink>
          </div>
        )}
        <NavLink to="/contacts" className={styles.headerNavLink}>
          Contacts
        </NavLink>
      </nav>
      {isLoggedIn && width > breakPoint && (
        <div className={styles.userNameBox}>
          <span className={styles.userNameIcon}>D</span>
          <span className={styles.userName}>Dmitri</span>
        </div>
      )}
      {isLoggedIn && (
        <button type="button" className={styles.logoutBtn}>
          <svg className={styles.logoutIcon}>
            <use href={sprite + '#icon-sign-out'} />
          </svg>
        </button>
      )}
    </div>
  );
};

export default NavMenu;
