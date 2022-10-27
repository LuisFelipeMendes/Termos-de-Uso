import React, { useState } from 'react'
//
import Logo from '../../assets/logo.png'
//
import { constants } from '../../constants';
//
import { HiMenu } from "react-icons/hi";
//
import styles from './navbar.module.css';

export default function Navbarhome() {

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
