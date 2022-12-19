import React from 'react';
import styles from './footer.module.css';

function footer(props) {
  return (
    <>
     <footer className={styles.footer}>
      <span>회사명: Tayong</span>
     </footer> 
    </>
  );
}

export default footer;