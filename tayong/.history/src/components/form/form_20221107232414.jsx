import React from 'react';
import styles from './form.module.css';

function Form(props) {
  return (
      <form className={styles.form}>
        <input type="text"/>
      </form>
  );
}

export default Form;