import { Appwrite } from 'appwrite'




const sdk = new Appwrite ();

sdk.setEndpoint('http://localhost/v1') // Your Appwrite Endpoint
    .setProject('626fef7629ee6b43cfdc') // Your project ID
;


//account instance
export const account = sdk.account



//function for fecthing currently authenticated user
export const getCurrentUser = async () => {
     const newUser =  await account.get() //get newly authenticated user
     return newUser
}


//logging user out 
export const logOutUser = async () =>  await account.deleteSession('current')
     


//funtion for signing user with email and password
export const signInuser = async (email, password) => await account.createSession(email,password)



//function for user signup
export const signUpUser = async (name, email, password) => {
    await account.create('unique()',email,password,name)
    await account.createSession(email,password)
}



//function for authenticating with google
export const signUpWithGoogle = async () =>{
    try{
        await account.createOAuth2Session('google', 'http://localhost:3000','http://localhost:3000/login');
    }
    catch(e){
        console.error(e)
    }
}


export default sdk



