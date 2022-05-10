import React,{useContext, useState} from 'react'
import {MdFilterList} from 'react-icons/md'
import { ApplicationContext } from '../../context/application/applicationContext'
import NewApplication from './NewApplication'


const AllApplications = () => {

    // const applications = useContext(ApplicationContext) //application data pulled for building ui

    const [showSearchField, setShowSearchField] = useState(false)


    


    const showSearch = ()=>{
        setShowSearchField(!showSearchField)
    }
    
  return (
      <>
      <div className='application_search_container'>
          <div onClick={showSearch} className='display-searchfield'><h4>Search <MdFilterList className='search-icon'/></h4></div>
          {showSearchField && <div className='application_form_container'>
               <form className='form'>
                  <label>Search</label>
                  <input type='text' id='search' name='search' 
                   placeholder='Enter your search word'
                   />
                </form>
                <form className='form'>
                   <label>Status</label>
                    <select name="status" id="status">
                       <option>All</option>
                       <option>Interview</option>
                       <option>Declined</option>
                       <option>pending</option>
                    </select>
                </form>
                <form className='form'>
                   <label>Type</label>
                    <select name="type" id="type">
                       <option>All</option>
                        <option>full-time</option>
                        <option>Part-time</option>
                        <option>remote</option>
                        <option>internship</option>
                    </select>
                </form>
                <form className='form'>
                    <label>Sort</label>
                    <select name="sort" id="sort">
                        <option>latest</option>
                        <option>oldest</option>
                        <option>a-z</option>
                        <option>z-a</option>
                    </select>
                </form>
                 <button className='filter-btn'>clear filter</button>
             </div>}
       </div> 
       <NewApplication/>
       </>
  )
}

export default AllApplications
