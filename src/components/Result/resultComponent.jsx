import { useState } from 'react';
import './resultComponent.styles.css'
import {BsThreeDotsVertical } from "react-icons/bs";

import ResultDropdown from '../resultDropdown/resultDropdown';


const Result = ()=>{
    const [showDropdown,setShowDropdown] = useState(false)
   return (
    <div className="application_results_result">
    <div className="result_top">
        <span className="dot"></span>
        <p className="result_top_title">
            Project Management
        </p>
        <BsThreeDotsVertical className='three_vertical' onClick={()=> setShowDropdown(!showDropdown)}/>
    </div>
    <div className="result_center">
        <h2 className="result_center_title">UX Design Remote</h2>
        <p className="result_center_paragraph">Remote     <span className="dot dot-center"></span>Full-time</p>
    </div>
    <div className="result_bottom">
        <p className="result_bottom_paragraph">
            BLAST <span>Declined</span>
        </p>
    </div>
    {showDropdown && <ResultDropdown/>}
    </div>
   )
}


export default Result