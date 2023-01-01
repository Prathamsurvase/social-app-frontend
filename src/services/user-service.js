 import { myAxios } from "./helper";

 const signUp=(user)=>{
    return myAxios.post('',user).then((response)=> response.data())
 }