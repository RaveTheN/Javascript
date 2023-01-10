//The destructuring returns undefined for the properties: name, surname and old. Try to fix the code without changing the name's properties of the object person.

const person = {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    //age: 25
    old: 25
};

// const { id, name, surname, old } = person;
// console.log(id, name, surname, old);

const { id, firstName, lastName, old } = person;
console.log(id, firstName, lastName, old);

