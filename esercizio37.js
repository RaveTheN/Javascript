//Write a promise. If the variable called number is greater than 10, then it returns a resolve, otherwise it returns a reject. 
//Then manage the promise with then and catch in case of any reject.

const number = 15;

let myPromise = new Promise((resolve, reject) => {
    if(number > 10){
        resolve("is greater")
    } else {
        reject("is equal or lower")
    }
})

myPromise
    .then((val) => console.log(val))
    .catch((err) => console.error(err))