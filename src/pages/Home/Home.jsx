import React from 'react'
// import { Link } from 'react-router-dom'
import Banner from '../../components/banner/Banner'
import banner from '../../assets/image.jpg'
import Thumb from '../../components/Thumb/Thumb'
import styles from './home.module.css'

export default function Home(props) {
  return (
    <>
      <Banner image={banner}>
        <h2>Chez vous, partout et ailleurs</h2>
      </Banner>
      <div className={styles.gallery}>
        {props.locationList.map((location) => (
          <Thumb
            key={location.id}
            title={location.title}
            imgSrc={location.cover}
          />
        ))}
      </div>
    </>
  )
}
