import { myAxios } from "./helper";

export const LoadAllCatogoires=()=>{

    return myAxios.get(`/categories/`).then(response=>{return response.data})
}