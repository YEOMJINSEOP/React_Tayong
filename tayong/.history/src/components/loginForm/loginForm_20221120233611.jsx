import React from 'react';
import styles from './loginForm.module.css';

function LoginForm(props) {
  return (
    <>
      <div className={styles.logInContainer}>
        <div className={styles.logo}>Tayong</div> 
        <label for="email">이메일</label>
        <input type="email"  id="email" size="30" required/>
      </div>
    </>
  );
}

export default LoginForm;