import React, { ChangeEvent, FC, useState } from 'react';
import { ReactComponent as Plus } from '../img/plus.svg';
import { ReactComponent as Minus } from '../img/minus.svg';
import { ReactComponent as CloseBig } from '../img/closeBig.svg';
import styles from './Menu.module.scss';
//minus.svg
interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const Menu: FC<MenuProps> = ({ isOpen, onClose }) => {
  const [isSelectOpen, setIsSelectOpen] = useState<boolean>(false);
  const [isSelectOpen2, setIsSelectOpen2] = useState<boolean>(false);
  const toggleSelect = () => {
    setIsSelectOpen(!isSelectOpen);
  };
  const toggleSelect2 = () => {
    setIsSelectOpen2(!isSelectOpen2);
  };
  const handleMenuClose = () => {
    onClose();
  };

  const Select: FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => (
    <select className={!isOpen ? styles.noSelect : styles.activeSelect}>

      <option>Select the artist</option>
    </select>
  );

  const Selectt: FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => (
    <select className={!isOpen ? styles.noSelect2 : styles.activeSelect2}>
      <option>Select the location</option>
    </select>
  );

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
                Artist <button className={styles.button1} onClick={toggleSelect}>{isSelectOpen ? <Minus /> :<Plus /> }</button>
                <Select isOpen={isSelectOpen} onClose={toggleSelect} />
              </li>
              <li>
                Location <button className={styles.button2} onClick={toggleSelect2}>{isSelectOpen2 ? <Minus /> :<Plus /> }</button>
                <Selectt isOpen={isSelectOpen2} onClose={toggleSelect2} />
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