import React from 'react'
import styles from './tags.module.css'

export default function Tags({ tags }) {
  return (
    <>
      <ul className={styles.tags}>
        {tags.map((tag) => {
          return <li key={tag}>{tag}</li>
        })}
      </ul>
    </>
  )
}
