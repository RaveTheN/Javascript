//Define inside the class Person a static method called fromObject that takes in an object literal as parameter and instantiate a Person object.

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    static fromObject(object) {
        return object;
    }
}

const obj = {
firstName: 'Mario',
lastName: 'Rossi'
};

const maria = {
    firstName: 'Maria',
lastName: 'Campanella'
};

const person = Person.fromObject(maria);
console.log(person.firstName + " " + person.lastName);