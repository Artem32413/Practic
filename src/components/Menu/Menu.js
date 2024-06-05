import React from 'react'
import { ReactComponent as Plus } from '../img/plus.svg'
import './Menu.modul.scss'
export default function Menu({ items }) {
    return (
        <div className='menu'>
            <div className='position-menu'>
                <div className='margin-block'>
                    <div className='menu-content'>
                        <ul className='siUl1'>
                            <li className='filtering'>Artist <button><Plus /></button></li>
                            <li className='filtering'>Location <button><Plus /></button></li>
                            <li className='filtering'>Years <button><Plus /></button></li>
                        </ul>
                    </div>
                    <div className='footer-filtr'>
                        <ul className='isUl'>
                            <li>Show the results</li>
                            <li>clear</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
