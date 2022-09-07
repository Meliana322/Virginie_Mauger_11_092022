import React from 'react'
import { Link } from 'react-router-dom'
import styles from './404.module.css'

export default function Error() {
  return (
    <div className={styles.container}>
      <h2 className={styles.error}>404</h2>
      <p className={styles.msg}>
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link className={styles.return} to="/">
        Retourner sur la page d'accueil
      </Link>
    </div>
  )
}
