import React, { createContext, useEffect, useState } from 'react';
import {  getCurrentUser} from '../../Services/connectApi';




export const UserContext = createContext({user:null,isLoading:true});





const UserProvider = ({children})=>{
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)



    useEffect(()=>{
      const registerUserSession = async() =>{
            try {
                const newUser = await getCurrentUser()
                    setUser(newUser)
                    setIsLoading(false)
                }  catch(err){
                    if(err.code === 401){
                        setUser(null)
                    }
                }
    }
         registerUserSession()
    },[])

return (
    <UserContext.Provider value={{user,isLoading}}>{children}</UserContext.Provider>
)


}

export default UserProvider;