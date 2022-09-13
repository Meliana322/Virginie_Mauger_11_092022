import React from 'react'
import styles from './host.module.css'

export default function Host({ name, picture }) {
  // Split (divise en chaine de caractères)
  const infoHost = name.split(' ')
  return (
    <div className={styles.host}>
      <p>
        {infoHost[0]}
        <br />
        {infoHost[1]}
      </p>
      <img src={picture} alt="" />
    </div>
  )
}
