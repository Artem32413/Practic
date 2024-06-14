import React, { FC, useState, useEffect } from 'react';
import { ReactComponent as Plus } from '../img/plus.svg';
import { ReactComponent as Minus } from '../img/minus.svg';
import { ReactComponent as CloseBig } from '../img/closeBig.svg';
import styles from './Menu.module.scss';
// import { fetchArtists, fetchLocations } from '../../../src/hooks/filtr-search';
import axios from 'axios';
import { createPortal } from 'react-dom';

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}
interface Authors {
  id: number;
  name: string;
}
interface Locations {
  id: number;
  location: string;
}
const Menu: FC<MenuProps> = ({ isOpen, onClose }) => {
  const [isSelectOpen, setIsSelectOpen] = useState<boolean>(false);
  const [isSelectOpen2, setIsSelectOpen2] = useState<boolean>(false);
  const [isSelectOpen3, setIsSelectOpen3] = useState<boolean>(false);
  const [artists, setArtists] = useState<Authors[]>([]);
  const [locations, setLocations] = useState<Locations[]>([]);

  const toggleSelect = (): void => {
    setIsSelectOpen(!isSelectOpen);
  };
  const toggleSelect2 = (): void => {
    setIsSelectOpen2(!isSelectOpen2);
  };
  const toggleSelect3 = (): void => {
    setIsSelectOpen3(!isSelectOpen3);
  };

  const handleMenuClose = (): void => {
    onClose();
  };

  useEffect(() => {
    const getArtists = async (): Promise<void> => {
      const resArtists = await axios.get<Authors[]>('https://test-front.framework.team/authors');
      setArtists(resArtists.data);
    }
    getArtists();

    const getLocations = async (): Promise<void> => {
      const resLocations = await axios.get<Locations[]>('https://test-front.framework.team/locations');
      setLocations(resLocations.data);
    }
    getLocations();
  }, []);
//authors
//locations
  const modalMenu = document.getElementById('modal')
  return modalMenu? createPortal(
    (
      <div className={`${styles.menu} ${isOpen ? styles.activeMenu : ''}`}>
        <div className={styles.positionMenu}>
          <div className={styles.marginBlock}>
            <div className={styles.menuContent}>
              <button onClick={handleMenuClose} className={styles.closeButton}>
                <CloseBig className={styles.closeBig} />
              </button>
              <ul className={styles.siUl1}>
                <li>
                  Artist <button className={styles.button1} onClick={toggleSelect}>{isSelectOpen ? <Minus className={styles.minus} /> : <Plus className={styles.plus} />}</button>
                  <select className={!isSelectOpen ? styles.noSelect : styles.activeSelect}>
                    <option>Select the artist</option>
                    {artists.map((elArtists: any, i: number) => (
                      <option key={i}>
                        {`${elArtists.name}`}
                      </option>
                    ))}
                  </select>
                </li>
              </ul>

              <ul className={styles.siUl2}>
                <li>
                  Location <button className={styles.button2} onClick={toggleSelect2}>{isSelectOpen2 ? <Minus className={styles.minus} /> : <Plus className={styles.plus} />}</button>
                  <select className={!isSelectOpen2 ? styles.noSelect : styles.activeSelect}>
                    <option>Select the location</option>
                    {locations.map((elLocations: any, i: number) => (
                      <option key={i}>
                        {`${elLocations.locations}`}
                      </option>
                    ))}
                  </select>
                </li>
              </ul>

              <ul className={styles.siUl3}>
                <li>
                  Years <button className={styles.button3} onClick={toggleSelect3}>{isSelectOpen3 ? <Minus className={styles.minus} /> : <Plus className={styles.plus} />}</button>
                  <div className={`${!isSelectOpen3 ? styles.noSelect3 : styles.divClass}`}>
                    <input type='number' className={styles.activesearch3} placeholder='From' /> <div className={styles.blockDiv}></div> <input type='number' className={styles.activesearch3} placeholder='To' />
                  </div>
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
    ), modalMenu
  ): null
};

export default Menu;