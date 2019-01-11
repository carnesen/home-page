import React from 'react';

import styles from './styles.css';

export default function Home() {
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.imageWrapper}>
          <img src="/static/images/me.jpg" className={styles.image} alt="me" />
        </div>
        <div className={styles.titleWrapper}>
          <a href="/static/documents/Chris_Arnesen.pdf">
            <h1>Chris Arnesen</h1>
            <h3>Web Engineer</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

Home.propTypes = {};
