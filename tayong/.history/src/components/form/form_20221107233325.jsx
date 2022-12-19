import React from 'react';
import styles from './form.module.css';

function Form(props) {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <div className={styles.location}>
          <input className={styles.departure} type="text"/>
          <input className={styles.arrival} type="text"/>
        </div>
        <div>
          <input className={styles.remainingTime} type="text" />
          <input type="text" />
          <input type="text" />
        </div>
        <div className={styles.title}>
          <input type="text" />
        </div>
        <div className={styles.content}>
          <input type="text" />
        </div>
      </form>
    </div>
  );
}

export default Form;