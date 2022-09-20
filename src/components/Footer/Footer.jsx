import React from 'react'
import logo from '../../assets/logo_footer.png'
import styles from './footer.module.css'
// import { useLocation } from 'react-router-dom'

export default function Footer() {
  // recup URL
  // const location = useLocation()
  // const displayBottom = (location.pathname === '/') || ()
  // console.log(location)
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <img src={logo} className="logo-footer" alt="logo kasa" />
      </div>
      <p className={styles.rights}>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}
