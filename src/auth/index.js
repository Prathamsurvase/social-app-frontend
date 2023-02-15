//is logged in =>?

export  const isLoggedin=()=>{
    let data= localStorage.getItem("data")
    if (data == null){

        return false;
    }
    else {
        return true;
    }
};

//doLogin=> data=> set into local storage

export const doLogin = (data, next)=>{
    localStorage.setItem("data", JSON.stringify(data));
    next()
};


//doLogout=> remove from local storage

export const doLogout=(next)=>{
    localStorage.removeItem("data");
    next()
}

//get current user details

export const getCurrentUserDetail=()=>{
    if(isLoggedin){
        return JSON.parse(localStorage.getItem("data"));
    }
    else{
        return false;
    }
};
export const getToken=()=>{
    if(isLoggedin()){
        return JSON.parse(localStorage.getItem("data")).token
}
else{
    return null;
}
}