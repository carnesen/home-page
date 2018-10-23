import React from 'react'

import facebook from './images/facebook.svg'
import github from './images/github.svg'
import linkedin from './images/linkedin.svg'
import twitter from './images/twitter.svg'
import instagram from './images/instagram.svg'
import yelp from './images/yelp.svg'

import styles from './styles.css'

const links = [
  [instagram, 'https://www.instagram.com/chrisarnesen'],
  [facebook, 'https://www.facebook.com/Mark.Christian.Arnesen'],
  [github, 'https://github.com/carnesen'],
  [linkedin, 'https://www.linkedin.com/in/carnesen'],
  [twitter, 'https://www.twitter.com/chrisarnesen'],
  [yelp, 'https://carnesen.yelp.com'],
]

export default function BottomBar () {
  return (
    <div className={styles.wrapper}>
      {
        links.map(([src, href]) => (
          <div key={href} className={styles.imageWrapper}>
            <a href={href}><img src={src} className={styles.image} /></a>
          </div>
        ))
      }
    </div>
  )
}

BottomBar.propTypes = {}
