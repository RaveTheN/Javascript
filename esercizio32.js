//In this exercise we need to filter the properties of the object person in order to convert into JSON just the values of id and age.

const person = {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25,

    toJSON() {
        return {
            id: this.id,
            age: this.age,
        }
    }
};

const json = JSON.stringify(person);

console.log(json); // Should return: { "id": 1, "age": 25 }