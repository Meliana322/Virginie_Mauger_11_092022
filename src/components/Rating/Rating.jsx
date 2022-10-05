import React from 'react'
import styles from './rating.module.css'
import starEmpty from '../../assets/starEmpty.png'
import starFull from '../../assets/starFull.png'

export default function Rating({ rating }) {
  const starFill = []
  // i = nombre d'étoiles de la data
  for (let i = 1; i <= 5; i++) {
    // remplie le tableau avec les étoiles rouges
    i <= parseInt(rating)
      ? starFill.push(
          <img src={starFull} className={styles.starFull} key={i} alt="" />
        )
      : // si l'indice i à la ligne 7 est supérieur aux nombres d'étoiles rouges, alors je push dans le tableau jusqu'à 5 avec étoiles grises
        starFill.push(
          <img src={starEmpty} className={styles.starEmpty} key={i} alt="" />
        )
  }

  return <div className={styles.rating}>{starFill}</div>
}
