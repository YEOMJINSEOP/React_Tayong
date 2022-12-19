import React from 'react';
import styles from './signUpForm.module.css';

function SignUpForm(props) {
  return (
    <>
      <div className={styles.logInContainer}>
        <div className={styles.title}>회원가입</div> 
        
        <div className={styles.email}>
          <label htmlFor="email">이메일</label>
          <div className={styles.authContainer}>
            <input type="email"  id="email" name="email" required/>
            <button className={styles.authBtn} type="submit">인증</button>
          </div>
        </div>

        <div className={styles.password}>
          <label htmlFor="password">비밀번호</label>
          <input type="password" id="password" name="password" required />
        </div>

        <div className={styles.password}>
          <label htmlFor="password">비밀번호 확인</label>
          <input type="password" id="password" name="password" required />
        </div>

        <div className={styles.email}>
          <label htmlFor="phone">휴대폰 인증</label>
          <div className={styles.authContainer}>
            <input type="tel"  id="phone" name="phone" required/>
            <button className={styles.authBtn} type="submit">인증</button>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default SignUpForm;