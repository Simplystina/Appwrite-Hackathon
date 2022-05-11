import React, { useContext, useRef, useState, useEffect } from 'react'
import './Navbar.css'
import {AiOutlineMenuUnfold, AiFillCaretDown} from 'react-icons/ai'
// import {BsPersonCircle} from 'react-icons/bs'
import person from '../../images/person.png'
import { UserContext } from '../../context/user/userContext'

const Navbar = () => {

  const [height, setHeight] = useState(0)
  const ref = useRef(null)

  const {user} = useContext(UserContext)
  useEffect(() => {
    setHeight(ref.current?.clientHeight)
    console.log(height)
  })

  return (
    user && <div ref={ref} className='navbar-container'>
        <AiOutlineMenuUnfold className='menu-icon'/>
        <h2>Dashboard</h2>
        {height}
        <div className='user-btn'>
            <img className='user-img' src={person} alt=""/>
            <p>{user.name}</p>
            <AiFillCaretDown className='user-icon'/>
        </div>
    </div>
  )
}

export default Navbar
