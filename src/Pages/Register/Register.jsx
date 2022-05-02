import React, {  useReducer } from 'react'
import { useNavigate } from 'react-router-dom';
import './Register.css'
// import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import logo from '../../images/TRACKER.png'
import googleIcon from '../../images/google-icon.png'
import star from '../../images/star2.png'
import {signInuser, signUpUser, signUpWithGoogle } from '../../Services/connectApi';
// import {BsEyeFill } from 'react-icons/bs'

const intialState = {
    name:'',
    email: '',
    password:'',
    registeredStatus: false
}


const reducer = (state=intialState,action={}) => {
    const {type,payload} = action
    switch (type) {
        case 'name':
            return {...state,name:payload}
        case 'email':
            return {...state,email:payload}
            
        case 'password':
            return {...state,password: payload}
           
        case 'status':
            return {...intialState,registeredStatus:!state.registeredStatus}
        default:
            break;
    }
}





const Register = () => {
    
    const [state,dispatch] =useReducer(reducer,intialState)
    const navigate= useNavigate()

    const {name,email,password,registeredStatus} = state

 
    const handleOnChange = (e) => {
        dispatch({
            type:e.target.name,
            payload:e.target.value
        })
    }

  
    const submitForm = async (e)=>{
        e.preventDefault()
        if (registeredStatus){
            try{
            await signInuser(email,password)
            }catch(error){
                console.log(error)
            }finally{
                return navigate('/')
            }
        }

        try{
            await signUpUser(name,email,password)
        } catch(error){
            console.log(error)
        }finally{
            navigate('/')
        }
        }
    

    
  return (
    <>
     <div className="registration-container" >
        <div className='content1'>
           <img src={logo} alt="logo" className='logo'/>
           <h2 className='registration-signup'>{registeredStatus? "Sign in" : "Sign up"}</h2>
          {!registeredStatus &&
             <form className='form'>
                <label>Full Name</label>
                <input type='text' id='name' name='name' value={name}
                placeholder='Enter your name'
                onChange={(e)=> handleOnChange(e)}
                />
            </form>
            }
            <form className='form'>
                <label>Email</label>
                <input type='email' id='email' name='email' value={email}
                placeholder='Enter your mail'
                onChange={(e)=> handleOnChange(e)}
                />
            </form>
            <form className='form'>
                <label>Password</label>
                <input id='password' name='password' type='password' value={password}
                placeholder='Create password' autoComplete='new password'
                onChange={(e)=> handleOnChange(e)}
                />
            </form>
            <button onClick={(e)=> submitForm(e)} className='btn submit-btn'>submit</button>
            <button className='btn googleSignin'  onClick={(e)=> {e.preventDefault(); signUpWithGoogle()}}> <img className='google-icon' src={googleIcon} alt='google icon'/> signup with google
            </button>
            <p className='reg-status'>{registeredStatus?"Don't have an account?" :'Already have an account?'} <span onClick={()=> dispatch({type: 'status'})}>{registeredStatus?'Sign up' :'Sign in'}</span></p>
        </div>
        <div className='content2'>
            <img src={star} alt='star'/>
            <h2>Easily keep track of all jobs applications</h2>
            <p>Create an account to save your jobs applications and easily get notified to apply to them. Never miss a job or interview!</p>
        </div>
    </div>
    </>
  )}


export default Register
