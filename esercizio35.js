//Write a function called repeatHello, which will take as parameter a callback. 
//The callback function will simply print "Hello". The repeatHello function will 
//have to execute the callback function with an interval of 1 second. 

//The callback function must be an arrow function, can you also explain why?

function repeatHello(callback){
    setInterval(callback, 1000);
}

repeatHello(() => console.log("Hello"));