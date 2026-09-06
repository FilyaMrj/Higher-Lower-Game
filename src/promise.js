// Promise creation
const checkLogin= new Promise(
    (resolve,reject)=>{
    let loggedIn=false;
    if(loggedIn){
        resolve("welcome you are logged in")
    }
    else
    {
        reject("sorry you are not logged in")
    }
    }
)

// Suppose sucess
checkLogin.then((result)=>{
    console.log(result)
})
// Suppose failure
checkLogin.catch((error)=>{
    console.log(error)
})

