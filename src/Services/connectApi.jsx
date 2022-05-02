import { Appwrite } from 'appwrite';




const appwrite = new Appwrite();

appwrite
    .setEndpoint('http://localhost:8080/v1') // Your Appwrite Endpoint
    .setProject('626b0cf9a23f3eb4e126') // Your project ID
;


export default appwrite


export function registerUser (email, password, name){
    let promise = appwrite.account.create('unique()', email, password, name);
    
    promise.then(function (response) {
        console.log(response); // Success
    }, function (error) {
        console.log(error.JSON); // Failure
      });
}


