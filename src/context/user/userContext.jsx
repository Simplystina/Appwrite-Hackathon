import React, { createContext, useEffect, useState } from 'react';
import { getCurrentUser} from '../../Services/connectApi';
import {useNavigate} from 'react-router-dom'



export const UserContext = createContext(null)


const UserProvider = ({children})=>{
    const [user, setUser] = useState(null)
    const navigate = useNavigate()

    useEffect(()=>{
    const registerUserSession = async()=>{
        try{
            const newUser = await getCurrentUser()
            if (newUser) setUser(newUser);
        }catch(err){
            if(err.code === 401){
                setUser(null)
                
            }
        }
        }
         registerUserSession()
      
    },[user,setUser,navigate])

return (

    <UserContext.Provider value={user}>{children}</UserContext.Provider>

)


}

export default UserProvider;