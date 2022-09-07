import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import styles from './navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={logo}>
        <img src={logo} className={styles.logo} alt="logo kasa" />
      </div>

      <ul className={styles.list}>
        <Link className={styles.link} to="/">
          ACCUEIL
        </Link>
        <Link className={styles.link} to="/About">
          A PROPOS
        </Link>
      </ul>
    </nav>
  )
}
