const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

person2.firstName = "Simon";

// Modify the property `firstName` of the `person2` in "Simon".
//Changing the name in person2 modifies also the name in person1 as both the variables head to the same memory
//unit in which the data is allocated.

console.log(person1);
console.log(person2);
