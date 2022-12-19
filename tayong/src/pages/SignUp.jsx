import React from 'react';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import SignUpForm from '../components/signUpForm/signUpForm';

function SignUp(props) {
  return (
    <>
      <Header/>
      <SignUpForm/>
      <Footer/>
    </>
  );
}

export default SignUp;