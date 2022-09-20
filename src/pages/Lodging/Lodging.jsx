import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import styles from './lodging.module.css'
import Host from '../../components/Host/Host'
import Dropdown from '../../components/Dropdown/Dropdown'
import Rating from '../../components/Rating/Rating'
import Slide from '../../components/Slider/Slider'
import Tags from '../../components/Tags/Tags'

export default function Lodging(props) {
  const { userId } = useParams()
  const navigate = useNavigate()
  const location = props.locationList
    .filter((location) => location.id === userId)
    .shift()

  if (location === undefined) {
    navigate('/404')
    return null
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
