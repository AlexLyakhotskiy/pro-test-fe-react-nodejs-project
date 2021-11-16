import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getToken, getUserName } from '../../redux/auth/auth-selectors';
import Container from '../_shared/Container/Container';
import BurgerMenu from './BurgerMenu/BurgerMenu';

import styles from './Header.module.scss';
import Logo from './Logo/Logo';
import NavMenu from './NavMenu/NavMenu';

const Header = () => {
  const [windowWidth, setWindowWidth] = useState({
    width: window.innerWidth,
    breakPoint: 767,
  });
  const userName = useSelector(getUserName);

  const isLoggedIn = useSelector(getToken);

  const handleResizeWindow = useCallback(() => {
    setWindowWidth({ ...windowWidth, width: window.innerWidth });
  }, [windowWidth]);

  useEffect(() => {
    window.addEventListener('resize', handleResizeWindow);
    return () => {
      window.removeEventListener('resize', handleResizeWindow);
    };
  }, [handleResizeWindow]);

  const { width, breakPoint } = windowWidth;

  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <Logo />
        {width > breakPoint && (
          <NavMenu width={width} breakPoint={breakPoint} />
        )}
        {isLoggedIn && width < breakPoint && (
          <div>
            <span className={styles.userNameIcon}>{userName[0]}</span>
          </div>
        )}

        {width < breakPoint && <BurgerMenu />}
      </Container>
    </header>
  );
};

export default Header;
