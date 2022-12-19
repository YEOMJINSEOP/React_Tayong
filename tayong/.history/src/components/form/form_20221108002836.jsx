import React from 'react';
import styles from './form.module.css';

function Form(props) {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <div className={styles.locationContainer}>
          <div className={styles.departure}>
            <label htmlFor='departure'>출발지</label>
            <input type="text" id='departure' name='departure'/>
          </div>
          <div className={styles.arrival}>
          <label htmlFor='arrival'>도착지</label>
            <input type="text" id='arrival' name='arrival'/>
          </div>
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.remainingTime}>
            <input type="text" id='remainingTime' name='remainingTime'/>
          </div>
          
          <div className={styles.recruitment}>
            <input type="text" id='recruitment' name='recruitment'/>
          </div>
          <input className={styles.transport} type="text" />
        </div>
        <div className={styles.titleContainer}>
          <input className={styles.title} type="text" />
        </div>
        <div className={styles.contentContainer}>
          <input className={styles.content} type="text" />
        </div>
      </form>
    </div>
  );
}

export default Form;