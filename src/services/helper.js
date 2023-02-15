import axios from "axios";


export const BASE_URL = "http://localhost:9090/api/";

export const myAxios = axios.create({
    baseURL: BASE_URL,
}); 

export const privateAxios =axios.create({
    baseURL : BASE_URL,
})

privateAxios.interceptors.request.use(config =>{
    
})