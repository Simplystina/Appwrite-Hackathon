import React, { useEffect, useState } from 'react'
import './Dashboard.css'
import { Sidebar, Navbar, Overview } from '../../components/Index'
import { getCurrentUser } from '../../Services/connectApi'
import { useNavigate } from 'react-router-dom'


const Dashboard = () => {

    const navigate = useNavigate()
   
    
    useEffect(()=>{
        let userToken = getCurrentUser()
        userToken.then(function(result){
           console.log(result)
           
           
        }).catch((err)=>navigate('/'))
    },[])

   

    
  return (
    <div>
      <Navbar/>
      <Sidebar/>
      <Overview/>
    </div>
  )
}

export default Dashboard
