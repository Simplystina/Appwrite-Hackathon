import React from 'react'
import './Sidebar.css'
import logo from '../../images/TRACKER.png'
import {IoMdStats} from 'react-icons/io'
import {MdQueryStats,MdOutlinePostAdd} from 'react-icons/md'
import {ImProfile} from 'react-icons/im'

const Sidebar = () => {
  return (
   <aside className='side-bar'>
       <img className='sidebar-logo' src={logo} alt='logo'></img>
       <ul className='sidebar-links'>
          <li> <IoMdStats className='links-icon'/> Overview</li>
          <li> <MdQueryStats className='links-icon'/> All Jobs </li>
          <li> <MdOutlinePostAdd className='links-icon'/> Feeds </li>
          <li> <ImProfile className='links-icon' />Account</li>
       </ul>
    </aside>
  )
}

export default Sidebar
