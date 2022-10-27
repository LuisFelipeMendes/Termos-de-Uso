import React, { useState } from 'react'
//
import Logo from '../assets/logo.png'; //colocar Logo da empresa//
//

import styles from './navbar.module.css';

export default function Navbar() {

  return (
    <header className={styles['container']}>
      <img
        className={styles['logo']}
        src={Logo}
        alt='logo'
      />
    </header>
  )
}
