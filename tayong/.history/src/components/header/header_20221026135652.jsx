import React from 'react';
import styles from './header.css';

function Header(props) {
  return (
    <>
      <nav className={styles.navbar}>
      <p className={styles.logo}></p>
      </nav>
    </>
  );
}

export default Header;