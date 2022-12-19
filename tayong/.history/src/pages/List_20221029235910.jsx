import React from 'react';
import Arrival from '../components/arrival/arrival';
import Departure from '../components/departure/departure';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import MeetList from '../components/list/meetList';

function List(props) {
  return (
    <>
      <Departure/>
      <Arrival/> 
      <MeetList/>
    </>
  );
}

export default List;