import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import styles from './lodging.module.css'
// import locationList from './data.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import Host from '../../components/Host/Host'
import Stars from '../../components/Rating/Rating'
import Dropdown from '../../components/Dropdown/Dropdown'

function Slide({ imgList, title }) {
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
        <button
          className={styles.prevSlide}
          onClick={() => {
            prevSlide()
          }}
        >
          <FontAwesomeIcon icon={faChevronLeft} className={styles.chevron} />
        </button>
        <div className={styles.slider}>
          <img src={imgList[current]} alt={title} />
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

      <section>
        <div className={styles.container}>
          <div className={styles.info}>
            <h2>{location.title}</h2>
            <h3>{location.location}</h3>
            <div className={styles.tags}>{location.tags}</div>
          </div>
          <div className={styles.host}>
            <Stars rating={3} />
            <Host
              name={location.host.name}
              picture={location.host.picture}
            ></Host>
          </div>
        </div>
        <Dropdown title="Description">
          <ul>
            <li>{location.description}</li>
          </ul>
        </Dropdown>
        <Dropdown title="Équipements">
          <ul>
            <li>{location.description}</li>
          </ul>
        </Dropdown>
      </section>
    </>
  )
}

// import React, { useState } from 'react'
// import { useParams } from 'react-router-dom'
// import styles from './lodging.module.css'

// export default function Lodging(props) {
//   const [current, set current] = useState(0)
//   const length = props.length
//   const { userId } = useParams()

//   const location = props.locationList
//     .filter((location) => location.id === userId)
//     .shift()

//   console.log(location)
//   return (
//     <>

//       <section>
//         <div className={styles.container}>
//           <div>
//             {/* <h2>{location.title}</h2>
//             <h3>{location.location}</h3> */}
//           </div>
//           <div></div>
//         </div>
//       </section>
//     </>
//   )
// }
