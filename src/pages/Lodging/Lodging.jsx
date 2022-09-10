import React, { useState } from 'react'
import styles from './lodging.module.css'
import Navbar from '../../components/Navbar/Navbar'
import locationList from './data.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'

export default function Lodging(props) {
  const [current, setCurrent] = useState(0)
  const length = props.length

  function prevSlide() {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  function nextSlide() {
    setCurrent((prevCurrent) => {
      return prevCurrent === length - 1 ? 0 : prevCurrent + 1
    })
  }
  function Slide(props) {
    return (
      <>
        <div className={styles.slide}>
          <button
            className={styles.prevSlide}
            onClick={() => {
              prevSlide()
            }}
          >
            <FontAwesomeIcon icon={faChevronLeft} className={styles.chevron} />
          </button>
          <div className={styles.image}>
            <img src={props.source} alt={props.source} key={props.id} />
          </div>
          <button
            className={styles.nextSlide}
            onClick={() => {
              nextSlide()
            }}
          >
            <FontAwesomeIcon icon={faChevronRight} className={styles.chevron} />
          </button>
        </div>
      </>
    )
  }

  return (
    <>
      <Navbar />

      {locationList.map((location) => (
        <Slide key={location.id} source={location.pictures[current]} />
      ))}

      <section>
        <div className={styles.container}>
          <div>
            <h2>{location.title}</h2>
            <h3>{location.location}</h3>
          </div>
          <div></div>
        </div>
      </section>
    </>
  )
}
