import React from 'react';
import styles from './signUpForm.module.css';

function SignUpForm(props) {
  return (
    <>
      <div className={styles.logInContainer}>
        <div className={styles.title}>회원가입</div> 
        
        <div className={styles.email}>
          <label htmlFor="email">이메일</label>
          <input type="email"  id="email" required/>
          <button></button>
        </div>

        <div className={styles.password}>
          <label htmlFor="password">비밀번호</label>
          <input type="password" id="password" name="password" required />
        </div>
      </div>
    </>
  );
}

export default SignUpForm;