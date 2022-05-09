import { createContext, useState ,useEffect} from "react";
import sdk, {  getApplications } from "../../Services/connectApi";


//helper function for handling update 
const updateApplication = (allApplications,updateApplication)=>{
    return allApplications.map(application=>{
       if(application['$id']===updateApplication['$id']){
           return updateApplication
       }
    })
}


//helper function for handling delete 
const removeApplication = (allApplications,deletedApplication)=> allApplications.filter(application => application['$id']===deletedApplication['$id'])





export const ApplicationContext = createContext([])


const ApplicationProvider = ({children}) => {


    const [applicationData,setApplications] = useState([])

    useEffect(()=>{
     const unsuscribe = sdk.subscribe('documents',data =>{ //this subscribes to the document channel and listens to changes in documents
        if(data.event ==='database.documents.create'){
            setApplications((state) => [...state,data.payload])
        }
        else if(data.event ==='database.documents.update'){
              setApplications((state) => updateApplication(state,data.payload))
        }
        else if(data.event === 'database.documents.delete'){
            setApplications((state) => removeApplication(state,data.payload))
        }

     })

       return unsuscribe
    },[])
   

    useEffect(
        ()=>{
            const getApplicationsData = async ()=>{
                    const documents = await getApplications()
                    setApplications(documents)
            }
            getApplicationsData()
        },[])
   

    return <ApplicationContext.Provider value={applicationData}>{children}</ApplicationContext.Provider>
}

export default ApplicationProvider