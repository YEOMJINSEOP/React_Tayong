import React from 'react';
import { useState } from 'react';

function MeetList(props) {
  const [meetList, setMeetList] = useState([
    {
      'destination': '디지털미디어시티',
      'arrival': '한국항공대학교',
      'recruitment': '1/4',
      'remainingTime': '1시간 27분 남음'
    }
  ]);

  return (
    <>
      <ul>
        {meetList.map((meet) => {
          <li>
            <p>{meet.destination}</p>
            <p>{meet.arrival}</p>
          </li>
        })}
      </ul>
    </>
  );
}

export default MeetList;