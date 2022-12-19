import React from 'react';
import { useState } from 'react';
import Arrival from '../arrival/arrival';
import Departure from '../departure/departure';

function MeetList(props) {
  const [list, setList] = useState([
    {}
  ])
  return (
    <>
     <Departure/>
     <Arrival/> 
    </>
  );
}

export default MeetList;