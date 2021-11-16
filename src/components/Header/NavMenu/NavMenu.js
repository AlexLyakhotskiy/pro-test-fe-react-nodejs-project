import { NavLink } from 'react-router-dom';
import styles from './NavMenu.module.scss';
import { routes } from '../../../routes/routes';
import { useDispatch, useSelector } from 'react-redux';
import { getToken, getUserName } from '../../../redux/auth/auth-selectors';
import { logout } from '../../../redux/auth/auth-operations';
import Svg from '../../_shared/Svg/Svg';

const NavMenu = props => {
  const isLoggedIn = useSelector(getToken);
  const userName = useSelector(getUserName);
  const dispatch = useDispatch();
  const { width, breakPoint, isBurgerMenuOpen, toggleModal } = props;

  const handleLogOut = () => {
    isBurgerMenuOpen && toggleModal();
    dispatch(logout());
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
            >
              Home
            </NavLink>
            <NavLink
              to={routes.materials}
              className={styles.headerNavLink}
              activeClassName={styles.activeLink}
            >
              Materials
            </NavLink>
          </div>
        )}
        <NavLink
          to={routes.ourTeam}
          className={styles.headerNavLink}
          activeClassName={styles.activeLink}
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
