function nicknameMap(persons) {

  let nicknames = []

for (let i = 0; i < persons.length; i++){
    
    let subObject = Object(persons[i])
    let entries = Object.entries(subObject);

    nicknames.push(entries[0][1] + "-" + entries[1][1])    
}

return nicknames;
}

const persons = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }
];

const nicknames = nicknameMap(persons);
console.log(persons);
console.log(nicknames);