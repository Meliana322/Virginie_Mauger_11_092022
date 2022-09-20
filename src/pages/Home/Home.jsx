import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../../components/banner/Banner'
import banner from '../../assets/image.png'
import Thumb from '../../components/Thumb/Thumb'
import styles from './home.module.css'
import bannerHome from '../../components/banner/banner.module.css'

export default function Home(props) {
  return (
    <>
      <Banner image={banner} className={bannerHome.banner_home}>
        <h2>Chez vous, partout et ailleurs</h2>
      </Banner>
      <div className={styles.gallery}>
        {props.locationList.map((location) => (
          <Link key={location.id} to={`/Lodging/${location.id}`}>
            <Thumb title={location.title} imgSrc={location.cover} />
          </Link>
        ))}
      </div>
    </>
  )
}
