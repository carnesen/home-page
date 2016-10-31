import React from 'react'

import me from './me.jpg'
import styles from './styles.css'

export default function Home () {
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.imageWrapper}>
          <img src={me} className={styles.image} />
        </div>
        <div className={styles.titleWrapper}>
          <h1>Chris Arnesen</h1>
          <h3>Web Engineer</h3>
        </div>
      </div>
    </div>
  )
}

Home.propTypes = {}
