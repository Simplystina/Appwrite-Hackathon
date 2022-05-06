import React from 'react'
import './Sidebar.css'
import logo from '../../images/TRACKER.png'
import {IoMdStats} from 'react-icons/io'
import {MdQueryStats,MdOutlinePostAdd} from 'react-icons/md'
import {ImProfile} from 'react-icons/im'
import {BiLogOut} from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../../context/user/userContext'
import { logOutUser } from '../../Services/connectApi'
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {


  const navigate = useNavigate()
  const user = useContext(UserContext)

  const onClickLogOut = async () => {
    try{
      await logOutUser()
      navigate('/')
    }
    catch(err){
      console.log(err)
    }
    
  }
  return (
   <aside className='side-bar'>
       <img className='sidebar-logo' src={logo} alt='logo'></img>
       <ul className='sidebar-links'>
          <Link to='/'><li> <IoMdStats className='links-icon'/> Overview</li></Link>
          <Link to='/'><li> <MdQueryStats className='links-icon'/>  Applications </li></Link>
          <Link to='/'><li> <MdOutlinePostAdd className='links-icon'/> Feeds </li></Link>
          <Link to='/'><li> <ImProfile className='links-icon' />Account</li></Link>
          <li onClick={onClickLogOut} className='logout'> <BiLogOut className='links-icon' />logout</li>
       </ul>
    </aside>
  )
}

export default Sidebar
