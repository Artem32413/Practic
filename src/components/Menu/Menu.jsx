import React, { useState } from 'react'
import { ReactComponent as Plus } from '../img/plus.svg'
import styles from './Menu.module.scss'
export default function Menu(settingsBtn) {
    const {isOpen, setIsOpen} = useState(false)
    return (

        <div style={{ display: isOpen ? 'block' : 'none' }} className={styles.menu}>
            <div className={styles.positionMenu}>
                <div className={styles.marginBlock}>
                    <div className={styles.menuContent}>
                        <ul className={styles.siUl1}>
                            <li>Artist <button><Plus /></button></li>
                            <li>Location <button><Plus /></button></li>
                            <li>Years <button><Plus /></button></li>
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
        
    )
}
