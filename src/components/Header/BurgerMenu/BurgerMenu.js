import { useEffect, useState } from 'react';

import Container from '../../_shared/Container/Container';
import Svg from '../../_shared/Svg/Svg';
import NavMenu from '../NavMenu/NavMenu';

import styles from './BurgerMenu.module.scss';

const BurgerMenu = () => {
  const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);

  useEffect(() => {
    if (!isBurgerMenuOpen) {
      document.body.style.overflow = '';
    }
    if (isBurgerMenuOpen) {
      document.body.style.overflow = 'hidden';
    }
  }, [isBurgerMenuOpen]);

  const toggleModal = () => setBurgerMenuOpen(prev => !prev);

  return (
    <>
      <button type="button" onClick={toggleModal} className={styles.burgerBtn}>
        <Svg
          icon={isBurgerMenuOpen ? 'close' : 'burger-menu'}
          className={styles.burgerIcon}
        />
      </button>
      {isBurgerMenuOpen && (
        <div className={styles.menu}>
          <Container className={styles.container}>
            <NavMenu
              toggleModal={toggleModal}
              isBurgerMenuOpen={isBurgerMenuOpen}
            />
          </Container>
        </div>
      )}
    </>
  );
};

export default BurgerMenu;
