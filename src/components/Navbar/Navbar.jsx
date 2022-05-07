import React, { useContext } from 'react'
import './Navbar.css'
import {AiOutlineMenuUnfold, AiFillCaretDown} from 'react-icons/ai'
// import {BsPersonCircle} from 'react-icons/bs'
import person from '../../images/person.png'
import { UserContext } from '../../context/user/userContext'

const Navbar = () => {
  const {user} = useContext(UserContext)
  return (
    user && <div className='navbar-container'>
        <AiOutlineMenuUnfold className='menu-icon'/>
        <h2>Dashboard</h2>
        <div className='user-btn'>
            <img className='user-img' src={person} alt=""/>
            <p>{user.name}</p>
            <AiFillCaretDown className='user-icon'/>
        </div>
    </div>
  )
}

export default Navbar
