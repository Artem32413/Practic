import React from 'react'
import './styleBlok.modul.scss'
import {ReactComponent as Settings} from '../img/Settings.svg'
export default function InputBlok() {
  return (
    <div className='overInputBlok'>
      <div className='boxSearch'>
        <input type='text' className='input' placeholder="Painting title" />
        <button><Settings className='colorSettings' /></button>
      </div>
    </div>
  )
}
