import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbarhome from './navbarhome';
import styles from './styles.module.css'
export default function Home() {

    const [telaEscondida, setTelaEscondida] = useState(0);

    return (
        <>
            <section
                className={styles['error']}
                onClick={() => { setTelaEscondida(telaEscondida + 1) }}
            >
                <span>Error 404!</span>
                <span>Not Found</span>
                {telaEscondida >= 5 &&
                    <section className={styles['container']}>
                        <Navbarhome />
                        <span className={styles['title']}>
                            Clique nos links abaixo para ir aos Termos de uso do Parceiro desejado
                        </span>
                        <div className={styles['bloco-cont']}>

                            <div className={styles['bloco']}>
                                <Link className={styles['link']} to='/infiniti' target='_blank'>Inifiniti</Link>
                                <Link className={styles['link']} to='/Iconnext' target='_blank'>Iconnext</Link>
                                <Link className={styles['link']} to='/Agil' target='_blank'>Agil</Link>
                                <Link className={styles['link']} to='/Aiva' target='_blank'>Aiva</Link>
                                <Link className={styles['link']} to='/AmassTeo' target='_blank'>AmmasTeo</Link>
                            </div>
                            <div className={styles['bloco']}>
                                <Link className={styles['link']} to='/CNNCT' target='_blank'>CNNCT</Link>
                                <Link className={styles['link']} to='/CNX' target='_blank'>CNX</Link>
                                <Link className={styles['link']} to='/ConectaIP' target='_blank'>ConectaIP</Link>
                                <Link className={styles['link']} to='/FNET' target='_blank'>FNET</Link>
                                <Link className={styles['link']} to='/GenteTelecom' target='_blank'>GenteTelecom</Link>
                            </div>
                            <div className={styles['bloco']}>
                                <Link className={styles['link']} to='/Guaptel' target='_blank'>Guaptel</Link>
                                <Link className={styles['link']} to='/GX' target='_blank'>GX</Link>
                                <Link className={styles['link']} to='/HNS' target='_blank'>HNS</Link>
                                <Link className={styles['link']} to='/Indaiafibra' target='_blank'>Indaiafibra</Link>
                                <Link className={styles['link']} to='/InterPop' target='_blank'>InterPop</Link>
                            </div>
                            <div className={styles['bloco']}>
                                <Link className={styles['link']} to='/Lignet' target='_blank'>Lignet</Link>
                                <Link className={styles['link']} to='/LinkWap' target='_blank'>LinkWap</Link>
                                <Link className={styles['link']} to='/LTTelecom' target='_blank'>LTTelecom</Link>
                                <Link className={styles['link']} to='/Niqturbo' target='_blank'>Niqturbo</Link>
                                <Link className={styles['link']} to='/NTMovel' target='_blank'>NTMovel</Link>
                            </div>
                            <div className={styles['bloco']}>
                                <Link className={styles['link']} to='/OAC' target='_blank'>OAC</Link>
                                <Link className={styles['link']} to='/Online' target='_blank'>Online</Link>
                                <Link className={styles['link']} to='/PowerTurbo' target='_blank'>PowerTurbo</Link>
                                <Link className={styles['link']} to='/Se77e' target='_blank'>Se77e</Link>
                                <Link className={styles['link']} to='/Sinai' target='_blank'>Sinai</Link>
                            </div>
                            <div className={styles['bloco']}>
                                <Link className={styles['link']} to='/UaiSat' target='_blank'>UaiSat</Link>
                                <Link className={styles['link']} to='/UberNet' target='_blank'>UberNet</Link>
                                <Link className={styles['link']} to='/Camoa' target='_blank'>Camoa</Link>
                                <Link className={styles['link']} to='/Completa' target='_blank'>Completa</Link>
                                <Link className={styles['link']} to='/Heaven' target='_blank'>Heaven</Link>
                            </div>
                            <div className={styles['bloco']}>
                                <Link className={styles['link']} to='/Mck' target='_blank'>Mck</Link>
                                <Link className={styles['link']} to='/West' target='_blank'>West</Link>
                                <Link className={styles['link']} to='/DigiControl' target='_blank'>DigiControl</Link>
                                <Link className={styles['link']} to='/Plus' target='_blank'>Plus</Link>
                                <Link className={styles['link']} to='/Techy' target='_blank'>Techy</Link>
                            </div>
                            <div className={styles['bloco']}>
                                <Link className={styles['link']} to='/Avatel' target='_blank'>Avatel</Link>
                            </div>
                        </div>

                    </section>
                }
            </section>
        </>

    )
}
