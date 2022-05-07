import { Appwrite } from 'appwrite'





const sdk = new Appwrite ();

sdk.setEndpoint('https://tracker.myappwriteinstance.me/v1') // Your Appwrite Endpoint
    .setProject('6274251348c57f1f5322') // Your project ID
;


//account instances
export const account = sdk.account
//database instances
export const database = sdk.database



//function for fecthing currently authenticated user
export const getCurrentUser = async () => {
     const newUser =  await account.get() //get newly authenticated user
     return newUser
}


//logging user out 
export const logOutUser = async () =>  {
    try{
        await account.deleteSession('current')
        localStorage.removeItem('auth_state')
    }catch(err){
        console.log(err)
    }

}
     


//funtion for signing user with email and password
export const signInuser = async (email, password) => {
    await account.createSession(email,password)
    localStorage.setItem('auth_state', 1)
}



//function for user signup
export const signUpUser = async (name, email, password) => {

   await account.create('unique()',email,password,name)
    await account.createSession(email,password)
    localStorage.setItem('auth_state', 1)
}



//function for authenticating with google
export const signUpWithGoogle = async () =>{
    try{
        await account.createOAuth2Session('google', 'http://localhost:3000/dashboard','http://localhost:3000/login');
        localStorage.setItem('auth_state', 1)
    }
    catch(e){
        console.log(e, "erorrrrrrrrr")
        //console.error(e)
    }
}

//functions for updating user detail
export const updateName = async (name) =>  await account.updateName(name);

export const updatePassword = async (newpassword,oldPassword) => await account.updatePassword(newpassword,oldPassword);

export const updateEmail = async (email,password) => await account.updateEmail(email,password);


export default sdk




