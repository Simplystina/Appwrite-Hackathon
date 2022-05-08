import React from 'react'

const AddApplication = () => {
  return (
    <div>
      <h3 className='add-application-text'>Add a new Application</h3>
       <div className='add-application-container'>
            <form className='form'>
                  <label>Position</label>
                  <input type='text' id='position' name='position' 
                   />
             </form>
             <form className='form'>
                  <label>Company</label>
                  <input type='text' id='company' name='company' 
                   />
             </form>
             <form className='form'>
                  <label>Job Location</label>
                  <input type='text' id='location' name='location' 
                   />
             </form>
             <form className='form'>
                   <label>Status</label>
                    <select name="status" id="status">
                       <option>Interview</option>
                       <option>Declined</option>
                       <option>pending</option>
                    </select>
            </form>
            <form className='form'>
                <label>Job Type</label>
                <select name="type" id="type">
                    <option>full-time</option>
                    <option>Part-time</option>
                    <option>remote</option>
                    <option>internship</option>
                </select>
            </form>
            <div className='btn-container'>
                <button className='clear-btn'>clear</button>
                <button className='submit-job-btn'>submit</button>
            </div>
         </div>
    </div>
  )
}

export default AddApplication
