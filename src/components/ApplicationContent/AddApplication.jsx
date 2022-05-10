import React, { useReducer } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { createApplication } from '../../Services/connectApi'

const applicationTypes ={
  location:'location',
  position:'position',
  company:'company',
  status:'status',
  jobType:'jobType',
  clear:'clear',
 }

 const initialState ={
   location:'',
   position:'',
   company:'',
   status:'Interview',
   jobType:'full-time',
 }


const reducer = (state=initialState, action={}) =>{

  const {type,payload} = action
  switch (type) {
    case applicationTypes.company:
      return {...state,company:payload}
    case applicationTypes.jobType:
      return {...state,jobType:payload}
    case applicationTypes.status:
      return {...state,status:payload}
    case applicationTypes.position:
      return {...state,position:payload}
    case applicationTypes.location:
     return {...state,location:payload}
    case applicationTypes.clear:
      return {...initialState}
    default:
      return state
  }

}

const AddApplication = () => {
  const [state,dispatch] =  useReducer(reducer,initialState)
  const {location,position,status,company,jobType} =state

 const handleChange =(e) => {
   dispatch({
     type:e.target.name,
     payload:e.target.value
   })
 }

 const handleSubmit =async ()=> {
   if(!(location&&position&&company&&jobType&&status)) return toast.error('Please all fields are required to create a new application')

   await createApplication(state)
   toast.success('Application created')
  //  dispatch({type:'clear'})
 }


  return (
    <div>
      <ToastContainer   autoClose={2000} position="top-center"/>
      <h3 className='add-application-text'>Add a new Application</h3>
       <div className='add-application-container'>
            <form className='form'>
                  <label>Position</label>
                  <input type='text' id='position' name='position'  value={position} onChange={handleChange}
                   />
             </form>
             <form className='form'>
                  <label>Company</label>
                  <input type='text' id='company' name='company' value={company} onChange={handleChange}
                   />
             </form>
             <form className='form'>
                  <label>Job Location</label>
                  <input type='text' id='location' name='location' value={location} onChange={handleChange}
                   />
             </form>
             <form className='form'>
                   <label>Status</label>
                    <select name="status" id="status" value={status} onChange={handleChange}>
                       <option value='Interview'>Interview</option>
                       <option value='Declined'>Declined</option>
                       <option value='pending'>pending</option>
                    </select>
            </form>
            <form className='form'>
                <label>Job Type</label>
                <select name="jobType"  value={jobType} id="type" onChange={handleChange} >
                    <option value='full-time'>full-time</option>
                    <option value='Part-time'>Part-time</option>
                    <option value='remote'>remote</option>
                    <option value ='internship'>internship</option>
                </select>
            </form>
            <div className='btn-container'>
                <button className='clear-btn' onClick={() => dispatch({type:'clear'})}>clear</button>
                <button className='submit-job-btn' onClick={handleSubmit}>submit</button>
            </div>
         </div>
    </div>
  )
}

export default AddApplication
