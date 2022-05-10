import './applicationResults.styles.css'
import {BsThreeDotsVertical } from "react-icons/bs";


const ApplicationResults = ()=>{
    return(
        <section className="application-results">
            <div className="application_results_result">
                <div className="results_top">
                    <span className="dot"></span>
                    <p className="results_top_title">
                        Project Management
                    </p>
                    <BsThreeDotsVertical className='three_vertical'/>
                </div>
                <div className="results_center">
                    <h2 className="results_center_title">UX Design Remote</h2>
                    <p className="results_center_paragraph">Remote     <span className="dot dot-center"></span>Full-time</p>
                </div>
                <div className="results_bottom">
                    <p className="results_bottom_paragraph">
                        BLAST <span>Declined</span>
                    </p>
                </div>
            </div>
            <div className="application_results_result">
                
            </div>
            <div className="application_results_result">
                
            </div>
            <div className="application_results_result">
                
            </div>
            <div className="application_results_result">
                
                </div>
        </section>
    )
}


export default ApplicationResults