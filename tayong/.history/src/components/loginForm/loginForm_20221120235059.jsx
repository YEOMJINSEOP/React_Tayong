import React from 'react';
import styles from './loginForm.module.css';

function LoginForm(props) {
  return (
    <>
      <div className={styles.logInContainer}>
        <div className={styles.logo}>Tayong</div> 
        
        <div className={styles.email}>
          <label for="email">이메일</label>
          <input type="email"  id="email" required/>
        </div>

        <div className={styles.password}>
          <label for="password">비밀번호</label>
          <input type="password" id="password" name="password" required />
        </div>
        
        <input type="submit" value="로그인" />
      </div>
    </>
  );
}

export default LoginForm;