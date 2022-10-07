import React, { useState } from 'react'
import styles from './dropdown.module.css'
import arrow from '../../assets/arrow.png'

export default function Dropdown({ children, title }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className={`${styles.dropdown} ${styles.dropdown} `}>
        <button className={`${styles.dropdownButton} ${styles.dropdownButton}`}>
          <span
            onClick={() => setIsOpen((prevIsOpen) => !prevIsOpen)}
            className={styles.dropdownButton}
          >
            {title}
            <img
              src={arrow}
              className={styles.chevron}
              alt=""
              // Si isOpen rotate sinon ne fais rien
              style={{ transform: isOpen ? 'rotate(180deg)' : null }}
            />
          </span>
        </button>

        {isOpen && <div className={styles.content}>{children}</div>}
      </div>
    </>
  )
}
