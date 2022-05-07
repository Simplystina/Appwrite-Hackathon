import React, { useState,useEffect } from 'react'
import './Overview.css'
import {FiArrowUpRight, FiArrowDownRight} from 'react-icons/fi'
import {FaTwitch, FaSlack, FaDropbox} from 'react-icons/fa'
import {RiArrowRightSLine} from 'react-icons/ri'
import { BarChart } from '../Index'
import SkeletonComponent from '../Skeleton/skeletonComponent'


const Overview = () => {

  const [isApplicationEmpty, setIsApplicationEmpty] = useState(true) //displays chart only when application list is not empty

  useEffect(() =>{
   
    setTimeout(()=>{
        setIsApplicationEmpty(false)
    },4000)


  })


  return (
    <div className='dashboard-overview'>
      {isApplicationEmpty?<SkeletonComponent/>:<><h2 className='overview-text'>Overview</h2>
       <div className='overview-stats-container'>
           <div className='overview-stats'>
               <span className='overview-stats-count'>54</span>
               <p className='overview-stats-text1'>Total applications</p>
               <div className='overview-stats-percent'><FiArrowUpRight className='arrow-up'/> 0.2%</div>
               <p className='overview-stats-text2'>compared to others</p>
           </div>
           <div className='overview-stats'>
               <span className='overview-stats-count'>27</span>
               <p className='overview-stats-text1'>Pending applications</p>
               <div className='overview-stats-percent'><FiArrowUpRight className='arrow-up'/> 0.2%</div>
               <p className='overview-stats-text2'>compared to last month</p>
           </div>
           <div className='overview-stats'>
              <span className='overview-stats-count'>11</span>
               <p className='overview-stats-text1'>Interviews scheduled</p>
               <div className='overview-stats-percent'><FiArrowUpRight className='arrow-up'/> 7.4%</div>
               <p className='overview-stats-text2'>compared to last month</p>
           </div>
           <div className='overview-stats'>
               <span className='overview-stats-count'>34</span>
               <p className='overview-stats-text1'>Jobs declined</p>
               <div className='overview-stats-percent red'><FiArrowDownRight className='arrow-up'/> 10.5%</div>
               <p className='overview-stats-text2'>compared to last month</p>
           </div>
       </div>
       <div className='overview-heading2'>
          <h2>Top Recently Saved Applications</h2>
          <button>see all</button>
       </div>
       <div className='overview-topjob-container'>
           <div className='overview-topjob-content'>
               <span><FaTwitch className='overview-topjob-icon'/> </span>
               <div>
                   <h2>Product management</h2>
                   <p>24th May 2022</p>
               </div>
               <RiArrowRightSLine className='arrow-right'/>
           </div>
           <div className='overview-topjob-content'>
               <span><FaSlack className='overview-topjob-icon'/> </span>
               <div>
                   <h2>Frontend Developer</h2>
                   <p>16th May 2022</p>
               </div>
               <RiArrowRightSLine className='arrow-right'/>
           </div>
           <div className='overview-topjob-content'>
               <span><FaDropbox className='overview-topjob-icon'/> </span>
               <div>
                   <h2>Devops Engineer</h2>
                   <p>18th May 2022</p>
               </div>
               <div className='arrow-right'><RiArrowRightSLine /></div>
           </div>
  </div>
  <BarChart/></>}
    </div>
  )
}

export default Overview