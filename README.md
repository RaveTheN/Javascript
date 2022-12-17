# Conditionals & Loops - Exercise 4

Create the function `nicknameMap` using the for loop, which takes in an array of people and returns a `nicknames` array. The nickname must be composed as follows: `<name>-<age>`.

//il ciclo for posso scriverlo anche in questo modo:
//for (let i = 0; i < persons.length; i++){
    
    let subObject = Object(persons[i])
    let entries = Object.entries(subObject);

    nicknames.push(entries[0][1] + "-" + entries[1][1])    
}