import React, { useState } from 'react';
//
import Logo from '../../assets/logo.png';
//
import { constants } from '../../constants';
//
import { FaInstagramSquare } from "react-icons/fa";
//
import styles from './footer.module.css';

export default function Footer() {

    //STATE
    const [easterEgg, setEasterEgg] = useState(0);

    //BODY
    return (
        <footer className={styles['container']}>
            <section className={styles['links-footer']}>

                <div className={styles['column-footer']}>
                    <img
                        className={styles['logo-footer']}
                        src={Logo}
                        alt="logo_img"
                    />

                    <span className={styles['logo-text']}>
                        Somos uma empresa brasileira com visão global,
                        que impulsiona conexões mais inteligentes e de
                        livre acesso.
                    </span>

                    <div className={styles['socials']}>
                        <a
                            href={constants.links.linkInstagram}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaInstagramSquare />
                        </a>
                    </div>
                </div>

            </section>

            <section
                className={styles['copyright']}
                onClick={() => { setEasterEgg(easterEgg + 1) }}
            >
                <span className={styles['text-copyright']}>
                    Copyright © {constants.texts.copyright} | All Rights Reserved
                </span>
                {easterEgg >= 10 &&
                    <span style={{width:'100%', textAlign:'center', marginTop:'1rem'}}>
                        Site feito por Felipe Dev :)
                    </span>
                }
            </section>

        </footer >
    )
}
