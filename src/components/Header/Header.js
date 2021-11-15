import { useEffect, useState } from 'react';
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

  const isLoggedIn = true;

  useEffect(() => {
    window.addEventListener('resize', handleResizeWindow);
    return () => {
      window.removeEventListener('resize', handleResizeWindow);
    };
  }, []);

  function handleResizeWindow() {
    setWindowWidth({ ...windowWidth, width: window.innerWidth });
  }

  const { width, breakPoint } = windowWidth;
  console.log(`windowWidth`, windowWidth);

  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <Logo />
        {width > breakPoint && (
          <NavMenu width={width} breakPoint={breakPoint} />
        )}
        {isLoggedIn && width < breakPoint && (
          <div>
            <span className={styles.userNameIcon}>D</span>
          </div>
        )}

        {width < breakPoint && <BurgerMenu />}
      </Container>
    </header>
  );
};

export default Header;
