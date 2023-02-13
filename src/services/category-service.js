import { myAxios } from "./helper";

export const LoadAllCatogoires=()=>{

    return myAxios.get('').then((response)=>response.data)
}