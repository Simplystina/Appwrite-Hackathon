import React from 'react'
import './Dashboard.css'
import { Sidebar, Navbar, Overview } from '../../components/Index'
import {Navigate} from 'react-router-dom'

const Dashboard = () => {
  const token = localStorage.getItem("auth_state")
  return (<>{
    
token ? (<div>
            <Navbar/>
            <Sidebar/>
            <Overview/>
        </div>):<Navigate to='/login'/>

  }</>)
   
}

export default Dashboard 
