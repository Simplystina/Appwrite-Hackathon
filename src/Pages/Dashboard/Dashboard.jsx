import React from 'react'
import './Dashboard.css'
import { Sidebar, Navbar, Overview } from '../../components/Index'

const dashboard = () => {
  return (
    <div>
      <Navbar/>
      <Sidebar/>
      <Overview/>
    </div>
  )
}

export default dashboard
