import React, { FC } from 'react';
import { ReactComponent as Plus } from '../img/plus.svg';
import { ReactComponent as CloseBig } from '../img/closeBig.svg';
import styles from './Menu.module.scss'

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const Menu: FC<MenuProps> = ({ isOpen, onClose }) => {
  const handleMenuClose = () => {
    onClose();
  };

  return (
    <div className={`${styles.menu} ${isOpen ? styles.activeMenu : ''}`}>
      <div className={styles.positionMenu}>
        <div className={styles.marginBlock}>
          <div className={styles.menuContent}>
            <button onClick={handleMenuClose} className={styles.closeButton}>
              <CloseBig />
            </button>
            <ul className={styles.siUl1}>
              <li>
                Artist <button><Plus /></button>
              </li>
              <li>
                Location <button><Plus /></button>
              </li>
              <li>
                Years <button><Plus /></button>
              </li>
            </ul>
          </div>
          <div className={styles.footerFiltr}>
            <ul className={styles.isUl}>
              <li>Show the results</li>
              <li>clear</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;