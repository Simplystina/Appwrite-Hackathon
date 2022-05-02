import React, { useEffect, useState } from 'react'
import './Register.css'
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import logo from '../../images/TRACKER.png'
import googleIcon from '../../images/google-icon.png'
import star from '../../images/star2.png'
import { registerUser } from '../../Services/connectApi';
import {BsEyeFill } from 'react-icons/bs'

const Register = () => {
    
    const [isRegistered, setIsRegistered] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    const switchRegStatus = ()=>{
        setIsRegistered(!isRegistered) //toggles to sign in and sign up pages.
    }
    const submitForm = ()=>{
    
    }
    

    
  return (
    <>
     <div className="registration-container" >
        <div className='content1'>
           <img src={logo} alt="logo" className='logo'/>
           <h2 className='registration-signup'>{isRegistered? "Sign in" : "Sign up"}</h2>
          {!isRegistered &&
             <form className='form'>
                <label>Full Name</label>
                <input type='text' id='name' name='name'
                placeholder='Enter your name'
                onChange={e => setName(e.target.value)}
                />
            </form>
            }
            <form className='form'>
                <label>Email</label>
                <input type='email' id='email' name='email'
                placeholder='Enter your mail'
                 onChange={e => setEmail(e.target.value)}
                />
            </form>
            <form className='form'>
                <label>Password</label>
                <input id='password' name='password'
                placeholder='Create password'

                 onChange={e => setPassword(e.target.value)}
                 
                />
            </form>
            <button onClick={submitForm} className='btn submit-btn'>submit</button>
            <button className='btn googleSignin'> <img className='google-icon' src={googleIcon} alt=''/> signup with google
            </button>
            <p className='reg-status'>{isRegistered?"Don't have an account?" :'Already have an account?'} <span onClick={switchRegStatus}>{isRegistered?'Sign up' :'Sign in'}</span></p>
        </div>
        <div className='content2'>
            <img src={star}/>
            <h2>Easily keep track of all jobs applications</h2>
            <p>Create an account to save your jobs applications and easily get notified to apply to them. Never miss a job or interview!</p>
        </div>
    </div>
    </>
  )
}

export default Register
