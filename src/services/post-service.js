import { myAxios } from "./helper";

export const createPost=(postData)=>{

    console.log(postData)
    return myAxios.post(`/user/${postData.user.id}/category/${postData.categoryid}/posts`, postData).then(response=> response.data)
}


//video= 18 time= 27:00 min