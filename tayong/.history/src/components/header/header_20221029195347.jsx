import React from 'react';
import styles from './header.module.css';

function Header(props) {
  return (
    <>
      <nav className={styles.navbar}>
        <p className={styles.logo}>Tayong</p>
        <div className={styles.navbarBtn}>
          <button className={styles.btn}>로그인</button>
          <button className={styles.btn}>회원가입</button>
        </div>  
      </nav>
    </>
  );
}

export default Header;