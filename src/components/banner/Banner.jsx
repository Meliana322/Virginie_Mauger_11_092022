import React from 'react'
import styles from './banner.module.css'

export default function Banner({ image, children }) {
  return (
    <div className={styles.banner_home}>
      <img src={image} alt="" />
      {children}
    </div>
  )
}
