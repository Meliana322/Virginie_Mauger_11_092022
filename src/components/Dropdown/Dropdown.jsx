import React, { useState } from 'react'
import styles from './dropdown.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default function Dropdown({ children, title }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div
        onClick={() => setIsOpen((prevIsOpen) => !prevIsOpen)}
        className="titre"
      >
        {title}
        <FontAwesomeIcon icon={faChevronDown} className={styles.chevron} />
      </div>
      {isOpen && <div>{children}</div>}
    </>
  )
}
