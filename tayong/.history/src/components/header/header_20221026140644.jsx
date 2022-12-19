import React from 'react';
import styles from './header.module.css';

function Header(props) {
  return (
    <>
      <nav className={styles.navbar}>
        <p className={styles.logo}>Tayong</p>
        <div className={styles.navbarBtn}></div>
        <button>로그인</button>
        <button>회원가입</button>
      </nav>
    </>
  );
}

export default Header;