
//Practicing map, filter, reduce, find, forEach
const employees = [
    { firstName: 'Alice', lastName: 'Smith', age: 28, occupation: 'Engineer' },
    { firstName: 'Bob', lastName: 'Johnson', age: 34, occupation: 'Designer' },
    { firstName: 'Charlie', lastName: 'Brown', age: 22, occupation: 'Student' },
    { firstName: 'Diana', lastName: 'Davis', age: 45, occupation: 'Manager' },
    { firstName: 'Ethan', lastName: 'Miller', age: 30, occupation: 'Developer' },
    { firstName: 'Ryan', lastName: 'Wilson', age: 46, occupation: 'Developer' },
];

const names = employees.map((person) => person.firstName);
console.log(employees);

const junior = employees.filter((person) => person.age < 30);

const midLevel = employees.filter(
  (person) => person.age > 30 && person.age < 40,
);
console.log(midLevel);

const senior = employees.filter((person) => person.age > 40);
console.log(senior);

// const nameRole = employees.map(person => `${person.name} is a ${person.occupation}`);
// console.log(nameRole);

// employees.forEach(person => console.log(`${person.name} is a ${person.occupation} at our company`))

const student = employees.find((person) => person.occupation === 'Student');
console.log(student);

const nameToAgeMap = employees.reduce((obj, employee) => {
  obj[employee.firstName] = employee.age;
  return obj;
}, {});

console.log(nameToAgeMap);
// { Alice: 28, Bob: 34, Charlie: 22, Diana: 45, Ethan: 30 }
