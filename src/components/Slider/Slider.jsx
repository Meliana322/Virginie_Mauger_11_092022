import React, { useState } from 'react'
import arrowLeft from '../../assets/arrowLeft.png'
import arrowRight from '../../assets/arrowRight.png'
import styles from './slider.module.css'

export default function Slide({ imgList, title }) {
  const [current, setCurrent] = useState(0)
  const length = imgList.length

  function prevSlide() {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  function nextSlide() {
    setCurrent((prevCurrent) => {
      return prevCurrent === length - 1 ? 0 : prevCurrent + 1
    })
  }

  return (
    <>
      <div className={styles.container}>
        {/* Les chevrons ne s'affichent pas si une seule photo */}
        {length > 1 && (
          <div className={styles.buttons}>
            <button
              className={styles.prevSlide}
              onClick={() => {
                prevSlide()
              }}
            >
              <img src={arrowLeft} className={styles.chevron} alt="" />
            </button>
            <button
              className={styles.nextSlide}
              onClick={() => {
                nextSlide()
              }}
            >
              <img src={arrowRight} className={styles.chevron} alt="" />
            </button>
          </div>
        )}

        <div className={styles.slider}>
          <img src={imgList[current]} alt={title} />
        </div>
      </div>
    </>
  )
}
