import React, { useState }  from 'react'
import styles from './styleBlok.module.scss'
import {ReactComponent as Settings} from '../img/Settings.svg'
export default function InputBlok() {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <div className={styles.overInputBlok}>
      <div className={styles.boxSearch}>
        <input type='text' className={styles.input} placeholder="Painting title" />
        <button id='settingsBtn' onClick={() => setIsOpen (!isOpen)}><Settings className={styles.colorSettings}  /></button>
      </div>
    </div>
  )
}
