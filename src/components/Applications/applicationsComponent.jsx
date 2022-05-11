import './applicationsStyles.css'
import {FaPlus} from 'react-icons/fa'
import SearchComponent from '../SearchApplications/searchApplicationsComponent'
import ApplicationResults from '../ApplicationResult/applicationsResultComponent'
import AddApplicationForm from '../../AddApplicationForm/AddApplicationForm'
import { useState } from 'react'

const ApplicationsComponent= ()=>{
    const [isModalOpen, setIsModalOpen] = useState(false)

    const addJob = ()=>{
        setIsModalOpen(true)
    }
    return (<>
            <header>
                <h2 className="heading">All Jobs</h2>
                <button onClick={addJob} className="btn-search"><FaPlus/> Add job</button>
            </header>
            <SearchComponent/>
            <ApplicationResults/>
            {isModalOpen && <AddApplicationForm showModal={setIsModalOpen}/>}
            </>
        
    )


} 

export default ApplicationsComponent