import React from 'react'
import { useParams, Navigate } from 'react-router-dom'
import styles from './lodging.module.css'
import Host from '../../components/Host/Host'
import Dropdown from '../../components/Dropdown/Dropdown'
import Rating from '../../components/Rating/Rating'
import Slide from '../../components/Slider/Slider'
import Tags from '../../components/Tags/Tags'

export default function Lodging(props) {
  const { userId } = useParams()
  // Va chercher dans la liste, filtres par id, récupère moi le premier et mets le dans location
  const location = props.locationList
    .filter((location) => location.id === userId)
    .shift()
  // Si Location est undefined et que le tableau des Locations n'est pas vide alors rends le composant Navigate(404)
  if (location === undefined && props.locationList.length > 0) {
    // "Navigate" change l'emplacement actuel lorsqu'il est rendu
    return <Navigate to="/404" />
  }

  return (
    <>
      <Slide imgList={location.pictures} title={location.title} />
      <section className={styles.container_description}>
        <div className={styles.container}>
          <div className={styles.info}>
            <h2>{location.title}</h2>
            <h3>{location.location}</h3>
            <Tags tags={location.tags} />
          </div>
          <div className={styles.host}>
            <Rating rating={location.rating} />
            <Host name={location.host.name} picture={location.host.picture} />
          </div>
        </div>
        <div className={styles.dropdown}>
          <Dropdown className={styles.description} title="Description">
            <ul>
              <div>{location.description}</div>
            </ul>
          </Dropdown>
          <Dropdown className={styles.equipment} title="Équipements">
            <ul>
              {location.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          </Dropdown>
        </div>
      </section>
    </>
  )
}
