import React, { useEffect, useState, ChangeEvent } from 'react';
import styles from './styleBlok.module.scss';
import { ReactComponent as Settings } from '../img/Settings.svg';
import { ReactComponent as Serch } from '../img/serch.svg';
import Menu from '../Menu/Menu';

export default function InputBlok() {
  const [value, setValue] = useState<string>('');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }

  return (
    <div className={styles.overInputBlok}>
      <div className={styles.boxSearch}>
        <div className={styles.positionIcon}>
          <input type='text' className={styles.input} placeholder="Painting title" onChange={handleChange} autoComplete='off'/>
          <i>
            <Serch className={styles.serch} />
          </i>
        </div>
        <button id='settingsBtn' onClick={toggleMenu}><Settings className={styles.colorSettings} /></button>
        {isMenuOpen && <Menu isOpen={isMenuOpen} onClose={toggleMenu} />}
      </div>
    </div>
  );
}