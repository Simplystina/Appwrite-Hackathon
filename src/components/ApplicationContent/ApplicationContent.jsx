import React, { useState } from 'react'
import './ApplicationContent.css'

import AddApplication from './AddApplication'
import AllApplications from './AllApplications'


const ApplicationContent = () => {

    
    const [tab, setTab] = useState('app') //use this to switch tabs
   
    const switchTab = (content)=>{
        setTab(content) 
       
    }
  return (
    <div className='application_content_container'>
        <div className='application_content_heading'>
          <span className='content-heading1' style={{background: `${tab==="app"? '#364DD9' :'white'}`,color: `${tab==="app"? 'white' :'black'}`}} onClick={()=>switchTab('app')}><h4>Applications</h4></span>
          <span className='content-heading2' style={{background: `${tab==="addApp"? '#364DD9' :'white'}`,color: `${tab==="addApp"? 'white' :'black'}`}} onClick={()=>switchTab('addApp')}><h4>Add an Application</h4></span>
        </div>
       {tab==="app" && <AllApplications/>} 
      {tab==="addApp" && <AddApplication/> }
    </div>
  )
}

export default ApplicationContent
