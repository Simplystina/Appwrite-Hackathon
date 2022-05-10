import './applicationsStyles.css'
import {FaPlus} from 'react-icons/fa'
import SearchComponent from '../SearchApplications/searchApplicationsComponent'
import ApplicationResults from '../ApplicationResult/applicationsResultComponent'

const ApplicationsComponent= ()=>{


    return (<>
            <header>
                <h2 className="heading">All Jobs</h2>
                <button className="btn btn-primary"><FaPlus/> Add job</button>
            </header>
            <SearchComponent/>
            <ApplicationResults/>
            </>
        
    )


} 

export default ApplicationsComponent