import React from 'react'
import styles from './thumb.module.css'

export default function Thumb(props) {
  return (
    <div className={styles.thumb}>
      <h3 className={styles.title}>{props.title}</h3>
      <img className={styles.img} src={props.imgSrc} alt={props.title} />
    </div>
  )
}
