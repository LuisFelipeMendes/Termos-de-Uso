import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
//
import Home from './Pages/home'
import Inifiniti from './Pages/Infiniti/index'
import Iconnext from './Pages/iconnext'
import Agil from './Pages/Agil'
import Aiva from './Pages/Aiva'
import AmassTeo from './Pages/AmassTeo'
import Cnnct from './Pages/CNNCT'
import Cnx from './Pages/CNX'
import ConectaIP from './Pages/ConectaIP'
import Fnet from './Pages/FNET'
import GenteTelecom from './Pages/GenteTelecom'
import Guaptel from './Pages/Guaptel'
import Gx from './Pages/GX'
import Hns from './Pages/HNS'
import Indaiafibra from './Pages/IndaiaFibra'
import Interpop from './Pages/InterPop'
import Lignet from './Pages/Lignet'
import Linkwap from './Pages/LinkWap'
import Ltmovel from './Pages/LTMovel'
import Lttelecom from './Pages/LTTelecom'
import Niqturbo from './Pages/NiqTurbo'
import Ntmovel from './Pages/NTMovel'
import Oac from './Pages/OAC'
import Online from './Pages/Online'
import Powerturbo from './Pages/PowerTurbo'
import Se77e from './Pages/Se77e'
import Sinai from './Pages/Sinai'
import Uaisat from './Pages/UaiSat'
import Ubernet from './Pages/UberNet'
import Viamovel from './Pages/ViaMovel'
import Camoa from './Pages/Camoa'
import Completa from './Pages/Completa'
import Heaven from './Pages/Heaven'
import Mck from './Pages/Mck'
import West from './Pages/West'
import DigiControl from './Pages/DigiControl'
import Plus from './Pages/Plus'
import Techy from './Pages/Techy'
import Avatel from './Pages/Avatel'


export default function Rotas() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/infiniti' element={<Inifiniti />} />
        <Route path='/Iconnext' element={<Iconnext />} />
        <Route path='/Agil' element={<Agil />} />
        <Route path='/Aiva' element={<Aiva />} />
        <Route path='/AmassTeo' element={<AmassTeo />} />
        <Route path='/CNNCT' element={<Cnnct />} />
        <Route path='/CNX' element={<Cnx />} />
        <Route path='/ConectaIP' element={<ConectaIP />} />
        <Route path='/FNET' element={<Fnet />} />
        <Route path='/GenteTelecom' element={<GenteTelecom />} />
        <Route path='/Guaptel' element={<Guaptel />} />
        <Route path='/GX' element={<Gx />} />
        <Route path='/HNS' element={<Hns />} />
        <Route path='/IndaiaFibra' element={<Indaiafibra />} />
        <Route path='/InterPop' element={<Interpop />} />
        <Route path='/Lignet' element={<Lignet />} />
        <Route path='/LinkWap' element={<Linkwap />} />
        <Route path='/LTMovel' element={<Ltmovel />} />
        <Route path='/LTTelecom' element={<Lttelecom />} />
        <Route path='/NiqTurbo' element={<Niqturbo />} />
        <Route path='/NTMovel' element={<Ntmovel />} />
        <Route path='/OAC' element={<Oac />} />
        <Route path='/Online' element={<Online />} />
        <Route path='/PowerTurbo' element={<Powerturbo />} />
        <Route path='/Se77e' element={<Se77e />} />
        <Route path='/Sinai' element={<Sinai />} />
        <Route path='/UaiSat' element={<Uaisat />} />
        <Route path='/UberNet' element={<Ubernet />} />
        <Route path='/ViaMovel' element={<Viamovel />} />
        <Route path='/Camoa' element={<Camoa />} />
        <Route path='/Completa' element={<Completa />} />
        <Route path='/Heaven' element={<Heaven />} />
        <Route path='/Mck' element={<Mck />} />
        <Route path='/West' element={<West />} />
        <Route path='/DigiControl' element={<DigiControl />} />
        <Route path='/Plus' element={<Plus />} />
        <Route path='/Techy' element={<Techy />} />
        <Route path='/Avatel' element={<Avatel />} />

        <Route />
      </Routes>
    </HashRouter>
  )
}
