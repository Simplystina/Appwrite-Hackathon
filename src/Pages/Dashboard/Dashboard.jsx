import React from 'react'
import './Dashboard.css'
import { Sidebar, Navbar } from '../../components/Index'
import {Navigate} from 'react-router-dom'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  const token = localStorage.getItem("auth_state")
  return (<>{
    
token ? (<div>
             <Navbar/>
            <Sidebar/>
         
             <Outlet/>
        </div>):<Navigate to='/login'/>

  }</>)
   
}

export default Dashboard 
