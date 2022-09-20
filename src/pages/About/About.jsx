import React from 'react'
import banner from '../../assets/image2.jpg'
import Dropdown from '../../components/Dropdown/Dropdown'
import dataAbout from './dataAbout.json'
import styles from './about.module.css'

export default function About() {
  return (
    <>
      {/* <Banner image={banner} className={bannerAbout.banner_about} /> */}
      <div className={styles.containerImage}>
        <img src={banner} className={styles.image} alt="" />
      </div>
      <div className={styles.dropdown}>
        {dataAbout.map((e, index) => (
          <Dropdown key={index} title={e.title} children={e.description} />
        ))}
      </div>
    </>
  )
}
