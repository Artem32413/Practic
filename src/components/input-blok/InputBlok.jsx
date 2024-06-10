import React, { useEffect, useState } from 'react'
import styles from './styleBlok.module.scss'
import { ReactComponent as Settings } from '../img/Settings.svg'
import { ReactComponent as Serch } from '../img/serch.svg'
import Menu from '../Menu/Menu'
export default function InputBlok() {
  const [value, setValue] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <div className={styles.overInputBlok}>
      <div className={styles.boxSearch}>
        <div>
          <input type='text' className={styles.input} placeholder="Painting title" onChange={event => setValue(event.target.value)}/>
          <i>
            <Serch className={styles.serch} />
          </i>
        </div>
        <button id='settingsBtn' onClick={toggleMenu}><Settings className={styles.colorSettings} /></button>
        {isMenuOpen && <Menu isOpen={isMenuOpen} onClose={toggleMenu} />}
      </div>
    </div>
  )
}
//onChange={event => setValue(event.target.value)}