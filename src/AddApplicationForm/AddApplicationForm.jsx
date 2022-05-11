import React from 'react'
import './AddApplicationForm.css'
import {MdOutlineClose} from 'react-icons/md'

const AddApplicationForm = () => {
  return (
    <div id="myModal" class="modal">
        <div className='modal-content'>
             <div className='modal-heading'>
                 <p>Add Job</p>
                 <MdOutlineClose className='close-icon'/>
             </div>
             <form className='form first-form'>
                 <label>Application Category</label>
                 <select>
                     <option>Product Design</option>
                 </select>
             </form>
             <form className='form'>
                 <label>Position</label>
                 <input type='text' placeholder="Frontend Dev"/>
             </form>
             <form className='form'>
                 <label>Company</label>
                 <input type='text' placeholder="Company"/>
             </form>
             <form className='form'>
                 <label>Job Location</label>
                 <input type='text' placeholder="Remote"/>
             </form>
             <form className='form'>
                 <label>Status</label>
                 <select>
                     <option>pending</option>
                     <option>declined</option>
                     <option>accepted</option>
                 </select>
             </form>
             <div className='add-application-btn-container'>
                 <button className='clear-form'>clear</button>
                 <button className='update-form'>update</button>
             </div>
        </div>
    </div>
  )
}

export default AddApplicationForm
