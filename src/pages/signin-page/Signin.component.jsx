import React, { Component } from 'react'
import './Signin.styles.css'
import { signInWithGoogle } from "./../../firebase/firebase.utils";
import Google from './../../assets/google.png'

export default class SignIn extends Component {
  render() {
    return (
      <div className='signin-page'>
        <img src={Google} className='googlelogo' alt="" srcset="" />
        <button className='google-signin' onClick={signInWithGoogle}>SIGN IN WITH GOOGLE</button>
      </div>
    )
  }
}
