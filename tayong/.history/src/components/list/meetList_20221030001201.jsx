import React from 'react';
import { useState } from 'react';

function MeetList(props) {
  const [meetList, setMeetList] = useState([
    {
      'destination': '디지털미디어시티',
      'arrival': '한국항공대학교',
      'recruitment': '1/4',
      'remainingTime': '1시간 27분 남음'
    },
    {
      'destination': '디지털미디어시티',
      'arrival': '한국항공대학교',
      'recruitment': '3/4',
      'remainingTime': '0시간 27분 남음'
    }
  ]);

  return (
    <div>
      <ul>
        {meetList.map((item) => {
          <li>item</li>
        })}
      </ul>
    </div>
  );
}

export default MeetList;