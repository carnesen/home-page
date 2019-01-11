import React from 'react';

import styles from './styles.css';

const links = [
  ['instagram', 'https://www.instagram.com/chrisarnesen'],
  ['facebook', 'https://www.facebook.com/Mark.Christian.Arnesen'],
  ['github', 'https://github.com/carnesen'],
  ['linkedin', 'https://www.linkedin.com/in/carnesen'],
  ['twitter', 'https://www.twitter.com/chrisarnesen'],
  ['yelp', 'https://carnesen.yelp.com'],
];

export default function BottomBar() {
  return (
    <div className={styles.wrapper}>
      {links.map(([src, href]) => (
        <div key={href} className={styles.imageWrapper}>
          <a href={href}>
            <img
              src={`/static/images/${src}.svg`}
              className={styles.image}
              alt={`icon for ${href}`}
            />
          </a>
        </div>
      ))}
    </div>
  );
}

BottomBar.propTypes = {};
