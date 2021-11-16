import { useEffect, useState } from 'react';
import Container from '../../_shared/Container/Container';
import NavMenu from '../NavMenu/NavMenu';
import sprite from '../sprite.svg';
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
        <svg className={styles.burgerIcon}>
          <use
            href={`${sprite}${
              isBurgerMenuOpen ? '#icon-close' : '#icon-burger-menu'
            }`}
          />
        </svg>
      </button>
      {isBurgerMenuOpen && (
        <div className={styles.menu}>
          <Container className={styles.container}>
            <NavMenu />
          </Container>
        </div>
      )}
    </>
  );
};

export default BurgerMenu;
