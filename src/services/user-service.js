 import { myAxios } from "./helper";

 export const signUp=(user)=>{
    return myAxios.post('/user/register',user).then((response)=> response.json())
 };

 export const loginUser=(loginDetails)=>{

   return myAxios.post('/api/auth/login', loginDetails).then((response)=>response.data)
 } 
