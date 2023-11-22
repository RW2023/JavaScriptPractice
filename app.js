
//Practicing map, filter, reduce, find, forEach
const employees = [
  { name: 'Alice', age: 28, occupation: 'Engineer' },
  { name: 'Bob', age: 34, occupation: 'Designer' },
  { name: 'Charlie', age: 22, occupation: 'Student' },
  { name: 'Diana', age: 45, occupation: 'Manager' },
  { name: 'Ethan', age: 30, occupation: 'Developer' },
];

const names = employees.map((person) => person.name);
console.log(names);

const junior = employees.filter((person) => person.age < 30);

const midLevel = employees.filter(
  (person) => person.age > 30 && person.age < 40,
);
// console.log(midLevel);

// const nameRole = employees.map(person => `${person.name} is a ${person.occupation}`);
// console.log(nameRole);

// employees.forEach(person => console.log(`${person.name} is a ${person.occupation} at our company`))

const student = employees.find((person) => person.occupation === 'Student');
console.log(student);

const nameToAgeMap = employees.reduce((obj, employee) => {
  obj[employee.name] = employee.age;
  return obj;
}, {});

console.log(nameToAgeMap);
// { Alice: 28, Bob: 34, Charlie: 22, Diana: 45, Ethan: 30 }
