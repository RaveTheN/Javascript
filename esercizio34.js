//Write a function called printAsyncName, which will take as parameters a callback and a string (which will be name). 
//The callback function will simply print "Hello". The printAsyncName function will have to execute the callback function
//after an interval of 1 second. After an interval of 2 seconds, we must print the name that we take as a parameter.

//The callback function must be an arrow function, can you also explain why?

//"Arrow functions (AF) are easier to use and are lexically bound reagardless of where and when they are invoked" > https://eslint.org/docs/latest/rules/prefer-arrow-callback
//AF are bounded to the "this" of the function in which it is enclosed, and since setTimeout breaks the flow of the script, with AF we can pass it
//that argument even if the flow is ahead of the moment it actually executes.

let printHello = () => console.log("Hello");

function printAsyncName(callback, name){
        setTimeout(callback, 1000);
        setTimeout(() => 
            console.log(name), 2000)
    }

printAsyncName(printHello,"Mario");