import React from 'react'
import './Sidebar.css'
import logo from '../../images/Trackerlogo.png'
import {IoMdStats} from 'react-icons/io'
import {MdQueryStats,MdOutlinePostAdd} from 'react-icons/md'
import {ImProfile} from 'react-icons/im'
import {BiLogOut} from 'react-icons/bi'
import { Link, NavLink} from 'react-router-dom'
import { logOutUser } from '../../Services/connectApi'
import { useNavigate } from 'react-router-dom';


const Sidebar = () => {
  const navigate = useNavigate()

  const handleLogOut = async () => {
          logOutUser()
          navigate('/login')
  }

  return (
   <aside className='side-bar'>
       <Link to='/'><img className='sidebar-logo' src={logo} alt='logo'></img></Link>
       <ul className='sidebar-links'>
          <li> <NavLink className="nav-links" to='/dashboard/overview'  style={({ isActive }) => ({ background: isActive ? "rgb(54, 77, 217)" : "none" , color: isActive? 'white':"#5C6578"})}><IoMdStats className='links-icon'/> Overview</NavLink></li>
          <li><NavLink className="nav-links" to='/dashboard/applications'  style={({ isActive }) => ({ background: isActive ? "#364DD9" : "none" ,color: isActive? 'white':"#5C6578"})}><MdQueryStats className='links-icon'/>  Applications</NavLink></li>
          <li><NavLink className="nav-links" to='/dashboard/feeds' style={({ isActive }) => ({ background: isActive ? "#364DD9" : "none",color: isActive? 'white':"#5C6578" })}> <MdOutlinePostAdd className='links-icon'/> Feeds</NavLink></li>
          <li><NavLink className="nav-links" to='/dashboard/account' style={({ isActive }) => ({ background: isActive ? "#364DD9" : "none",color: isActive? 'white':"#5C6578" })}><ImProfile className='links-icon' />Account</NavLink></li>
          <li className='logout' onClick={()=> handleLogOut()}>  <BiLogOut className='links-icon' />logout</li >
       </ul>
    </aside>
  )
}

export default Sidebar
