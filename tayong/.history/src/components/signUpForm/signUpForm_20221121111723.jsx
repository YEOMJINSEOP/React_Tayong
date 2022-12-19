import React from 'react';
import styles from './signUpForm.module.css';

function SignUpForm(props) {
  return (
    <>
      <div className={styles.logInContainer}>
        <div className={styles.title}>회원가입</div> 
        
        <label htmlFor="email">이메일</label>
        <div className={styles.email}>
          <input type="email"  id="email" required/>
          <input className={styles.authBtn} type="submit" value="인증"/>
        </div>

        <div className={styles.password}>
          <label htmlFor="password">비밀번호</label>
          <input type="password" id="password" name="password" required />
        </div>
        
        <input className={styles.submitBtn} type="submit" value="로그인" />

        <div className={styles.extraFunc}>
          <p>아이디/비밀번호 찾기</p>
          <p>회원가입</p>
        </div>
      </div>
    </>
  );
}

export default SignUpForm;