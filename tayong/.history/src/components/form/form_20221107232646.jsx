import React from 'react';
import styles from './form.module.css';

function Form(props) {
  return (
      <form className={styles.form}>
        <div className={styles.location}>
          <input type="text"/>
          <input type="text"/>
        </div>
        <div>
          <input type="text" />
          <input type="text" />
          <input type="text" />
        </div>
        <div className={styles.title}>
          <input type="text" />
        </div>
        <input type="text" />
      </form>
  );
}

export default Form;