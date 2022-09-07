import React, { useState } from 'react'
import styles from './slide.module.css'

export default function Slide(images) {
  // state (état, données)
  const [current, setCurrent] = useState(0)
  const length = images.length

  // comportements
  function nextSlide() {
    setCurrent((prevCurrent) => {
      return prevCurrent === length - 1 ? 0 : prevCurrent + 1
    })
  }

  function prevSlide() {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  // affichage (render)
  return (
    <>
      <div className={styles.carroussel}></div>
    </>
  )
}
