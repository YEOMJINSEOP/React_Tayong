import React from 'react';
import styles from './meetDetail.module.css'

function meetDetail(props) {
  return (
    <div>
      <div className={styles.container}>
        <img src="https://img.freepik.com/free-photo/taxi-sign-roof-top-car_74190-1728.jpg?w=1800&t=st=1667398413~exp=1667399013~hmac=efcccc4afa78711c2ff1407418bf496be6c0ddf73fe37c1c3ecf06f936d5bc24" alt="transport image" />
      </div>
    </div>
  );
}

export default meetDetail;