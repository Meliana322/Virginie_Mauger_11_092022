import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faStar } from '@fortawesome/free-solid-svg-icons'
import styles from './rating.module.css'
import starEmpty from '../../assets/starEmpty.png'
import starFull from '../../assets/starFull.png'

export default function Rating({ rating }) {
  const starFill = []
  // i = nombre d'étoiles de la data
  for (let i = 1; i <= 5; i++) {
    // remplie le tableau avec les etoiles rouges
    i <= parseInt(rating)
      ? starFill.push(
          // <FontAwesomeIcon icon={faStar} className={styles.starFull} key={i} />
          <img src={starFull} className={styles.starFull} key={i} alt="" />
        )
      : // si l'indice i à la ligne 7 est superieur aux nombres d'etoiles rouges, alors je push dans le tableau jusqu'a 5 avec etoiles grises
        starFill.push(
          <img src={starEmpty} className={styles.starEmpty} key={i} alt="" />
        )
  }

  return <div className={styles.rating}>{starFill}</div>
}
