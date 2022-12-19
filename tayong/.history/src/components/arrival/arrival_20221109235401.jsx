import React, { useEffect, useState } from 'react';
import styles from './arrival.module.css';

import { FaSearch } from 'react-icons/fa';

function Arrival({onSet}) {
  const [location, setLocation] = useState([]);
  const [inputStr, setInputStr] = useState('');

  useEffect(() => {
    fetch('data/location.json')
    .then(res => res.json())
    .then(data => {
      console.log("위치 데이터를 받아왔습니다🥕")
      setLocation(data);
      console.log(data);
    })
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.arrival}>
        <div className={styles.info}><span className={styles.ocos}>"</span><span>도착지</span><span className={styles.ocos}>"</span>를 입력해 주세요</div>
          <label htmlFor='arrival'></label>
          <div className={styles.inputBox}>
            <input
                className={styles.input}
                type="text"
                id='arrival'
                name='arrival'
                onChange = {
                  (e) => {
                    onSet(e.target.value);
                  }
                }
            />
            <FaSearch className={styles.searchIcon}/>
          </div>
      </div>
    </form>
  );
}

export default Arrival;