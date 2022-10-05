import React from 'react'
import logo from '../../assets/logo_footer.png'
import styles from './footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <img src={logo} className="logo-footer" alt="logo kasa" />
      </div>
      <p className={styles.rights}>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}
