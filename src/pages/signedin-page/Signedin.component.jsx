import React from 'react'
import { auth } from '../../firebase/firebase.utils'
import workUnderProcess from './../../assets/workunderprocess.png'
import './SignedIn.css'

export default function SignedIn({ username }) {
  return (
    <div className='signedin'>
      <p>Thanks For SignIn</p>
      <p>{(username === null) ? '' : username}</p>
      <button type="submit" className='google-signout' onClick={() => auth.signOut()}>SIGN OUT</button>
      <img className='workunder' src={workUnderProcess} alt="" srcset="" />
    </div>
  )
}

