import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { routes } from '../../../routes/routes';
import { getToken, getUserName } from '../../../redux/auth/auth-selectors';
import { logout } from '../../../redux/auth/auth-operations';

import Svg from '../../_shared/Svg/Svg';

import styles from './NavMenu.module.scss';

const NavMenu = props => {
  const isLoggedIn = useSelector(getToken);
  const userName = useSelector(getUserName);
  const dispatch = useDispatch();
  const { width, breakPoint, isBurgerMenuOpen, toggleModal } = props;

  const handleLogOut = () => {
    isBurgerMenuOpen && toggleModal();
    dispatch(logout());
  };

  const handleCloseMenu = () => {
    isBurgerMenuOpen && toggleModal();
  };

  return (
    <div className={styles.headerWrapper}>
      <nav className={styles.headerNav}>
        {isLoggedIn && (
          <div className={styles.headerUserNav}>
            <NavLink
              exact
              to={routes.home}
              className={styles.headerNavLink}
              activeClassName={styles.activeLink}
              onClick={handleCloseMenu}
            >
              Home
            </NavLink>
            <NavLink
              to={routes.materials}
              className={styles.headerNavLink}
              activeClassName={styles.activeLink}
              onClick={handleCloseMenu}
            >
              Materials
            </NavLink>
          </div>
        )}
        <NavLink
          to={routes.ourTeam}
          className={styles.headerNavLink}
          activeClassName={styles.activeLink}
          onClick={handleCloseMenu}
        >
          Contacts
        </NavLink>
      </nav>
      {isLoggedIn && width > breakPoint && (
        <div className={styles.userNameBox}>
          <span className={styles.userNameIcon}>{userName[0]}</span>
          <span className={styles.userName}>{userName}</span>
        </div>
      )}
      {isLoggedIn && (
        <button
          type="button"
          onClick={handleLogOut}
          className={styles.logoutBtn}
        >
          <Svg icon={'sign-out'} className={styles.logoutIcon} />
        </button>
      )}
    </div>
  );
};

export default NavMenu;
