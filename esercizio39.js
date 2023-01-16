//Starting from the previous exercise, try to better handle all errors through the Error class and the catch method. Also add the finally method.

const isLogged = true;

function isLoggedin(logStatus){
    return new Promise((resolve, reject) => {
        let rand = Math.random();
        if (logStatus == true){
            resolve(rand)
        } else {
            reject(new Error("Not logged in"));
        }
    })
}

function isValid(rand) {
    return new Promise((resolve, reject) => {
        if (rand > 0.5){
            resolve({name: "John", age: 24}) 
        }
        else {
            reject(new Error("is not valid"));
        }
    })
}

isLoggedin(isLogged)
    .then(isValid)
    .then((userData) => console.log(userData))
    .catch((err) => {
            console.warn("reattempting connection to server")
            isLoggedin(isLogged)
            .then(isValid)
            .then((userData) => console.log(userData))
            .catch(() => console.error(err))
    })
    .finally(() => console.log("All code executed"))