import React from 'react'
import styles from './Header.module.scss'
import {ReactComponent as VectorLight} from '../img/vector.svg';
import {ReactComponent as VectorDark} from '../img/darkTheme.svg'
import { ReactComponent as Logo } from '../img/logo.svg';
import { useTheme } from '../../hooks/use-theme';
export default function Header() {
    const { theme, setTheme } = useTheme()
    const hendleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }
    return (
        <header>
            <div className={styles.overHeader}>
                <div>
                    <span className='logo'>
                        <a className='lightButton'>
                            <Logo className={styles.logoHeader} />

                        </a>
                    </span>
                </div>
                <div>
                    <button onClick={hendleTheme}>
                    {theme === 'light' ? <VectorLight /> : <VectorDark />}
                        
                    </button>
                </div>
            </div>
        </header>
    )
}
