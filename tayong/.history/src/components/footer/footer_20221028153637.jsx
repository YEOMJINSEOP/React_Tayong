import React from 'react';
import styles from './footer.module.css';

function Footer(props) {
  return (
     <footer className={styles.footer}>
      <p className={styles.contract}>이용약관 | </p>
      <p className={styles.name}>@ Tayong 2022</p>
     </footer> 
  );
}

export default Footer;