import React from 'react';
import styles from './footer.module.css';

function Footer(props) {
  return (
    <>
     <footer className={styles.footer}>
      <p className={styles.contract}>이용약관</p>
      <p className={styles.name}>@ Tayong 2022</p>
      <p className={styles.phone}>연락처: 010-0000-0000</p>
      <p className={styles.address}>주소: OO시 OO구 OO로 OO번길 OO</p>
     </footer> 
    </>
  );
}

export default Footer;