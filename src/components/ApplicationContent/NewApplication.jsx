import React from 'react'
import {RiSendPlaneFill} from 'react-icons/ri'
import {MdOutlineLocationOn} from 'react-icons/md'
import {BsCalendarDateFill} from 'react-icons/bs'


const NewApplication = () => {
  return (
    <div className='new-applications-container'>
           <div className='new-application'>
              <div className='new-application-heading '>
                  <span className='first_letter_container'><h2>P</h2></span>
                  <div className='application-title-container'>
                     <h4 className='application_position'>Frontend Dev</h4>
                     <p className='application_company'>Brainnest</p>
                  </div>
               </div>
               <div className='new-application-content-container'>
                   <div className='new-application_content1'>
                      <span><RiSendPlaneFill className="location-icon"/> <h5 className='application-location'>online</h5></span>
                       <span><MdOutlineLocationOn className='type-icon'/> <h5 className='application-type'>remote</h5></span>
                       <button className='edit-btn'>Edit</button>
                       <button className='delete-btn'>Delete</button>
                    </div>
                    <div className='new-application_content2'>
                       <span><BsCalendarDateFill className='date-icon'/><h5 className='date-added'>April 25th, 2022</h5></span>
                       <button className='status-btn'>pending</button>
                    </div>
               </div>
            </div>
            <div className='new-application'>
              <div className='new-application-heading '>
                  <span className='first_letter_container'><h2>P</h2></span>
                  <div className='application-title-container'>
                     <h4 className='application_position'>Frontend Dev</h4>
                     <p className='application_company'>Brainnest</p>
                  </div>
               </div>
               <div className='new-application-content-container'>
                   <div className='new-application_content1'>
                      <span><RiSendPlaneFill className="location-icon"/> <h5 className='application-location'>online</h5></span>
                       <span><MdOutlineLocationOn className='type-icon'/> <h5 className='application-type'>remote</h5></span>
                       <button className='edit-btn'>Edit</button>
                       <button className='delete-btn'>Delete</button>
                    </div>
                    <div className='new-application_content2'>
                       <span><BsCalendarDateFill className='date-icon'/><h5 className='date-added'>April 25th, 2022</h5></span>
                       <button className='status-btn'>pending</button>
                    </div>
               </div>
            </div>
      </div>
  )
}

export default NewApplication
