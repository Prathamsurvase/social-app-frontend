import { privateAxios } from "./helper";
import { myAxios } from "./helper";

export const createPost=(postData)=>{

    console.log(postData)
    return privateAxios.post(`/user/${postData.userId}/category/${postData.categoryId}/posts`).then(response=> response.data)
    //video= 18 time= 27:00 min      
}

//get all posts

export const loadAllPosts =()=>{
    return myAxios.get(`/posts`).then(response => response.data)
}

export const loadAllBookMarkPosts =(userID)=>{
    return myAxios.get(`http://localhost:9090/api/bookmarks/user/${userID}`).then(response => response.data)
}

export const Loadcategorywise =(categoryId)=>{
    return privateAxios(`category/${categoryId}/posts`).then(response=>response.data)
}

//Upload Post Banner:

// export const uploadPostImage = (image)=>{
//     let formData = new FormData()
//     formData.append("image", image)
//     return privateAxios.post(``,formData).then((response)=> response.data)
// }



