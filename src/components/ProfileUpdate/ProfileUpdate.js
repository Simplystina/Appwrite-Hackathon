import React from 'react'
import './ProfileUpdate.css'

const ProfileUpdate = () => {
  return (
    <div className='profile-container'>
       <div className='profile-inner-container'>
           <h2 className='profile-heading'>Profile</h2>
           <div className='profile-form-container'>
                <form className='form'>
                    <label>Full Name</label>
                    <input type='text' id='name' name='name' value={"name"}
                    placeholder='Enter your name'
                    />
                </form>
            
                <form className='form'>
                    <label>Email</label>
                    <input type='email' id='email' name='email' value={"email"}
                    placeholder='Enter your mail'
                    />
                </form>
                <form className='form'>
                    <label>Password</label>
                    <input id='password' name='password' type='password' value={"password"}
                    placeholder='Create password' autoComplete='new password'
                    />
                </form>
                <button className='btn save-btn'>save changes</button>
           </div>
       </div>
    </div>
  )
}

export default ProfileUpdate
