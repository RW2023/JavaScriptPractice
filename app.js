document.addEventListener('DOMContentLoaded', () => {
  const displayElement = document.getElementById('dataDisplay');

  const employees = [
    { firstName: 'Alice', lastName: 'Smith', age: 28, occupation: 'Engineer' },
    { firstName: 'Bob', lastName: 'Johnson', age: 34, occupation: 'Designer' },
    { firstName: 'Charlie', lastName: 'Brown', age: 22, occupation: 'Student' },
    { firstName: 'Diana', lastName: 'Davis', age: 45, occupation: 'Manager' },
    {
      firstName: 'Ethan',
      lastName: 'Miller',
      age: 30,
      occupation: 'Developer',
    },
    { firstName: 'Ryan', lastName: 'Wilson', age: 46, occupation: 'Developer' },
  ];

  const junior = employees.filter((person) => person.age < 30);
  const midLevel = employees.filter(
    (person) => person.age > 30 && person.age < 40,
  );
  const senior = employees.filter((person) => person.age > 40);
  const student = employees.find((person) => person.occupation === 'Student');
  const nameToAgeMap = employees.reduce((obj, employee) => {
    obj[employee.firstName] = employee.age;
    return obj;
  }, {});

  displayElement.innerHTML = '<h2>All Employees</h2>';
  displayElement.innerHTML +=
    '<pre>' + JSON.stringify(employees, null, 2) + '</pre>';

  displayElement.innerHTML += '<h2>Junior Employees</h2>';
  displayElement.innerHTML +=
    '<pre>' + JSON.stringify(junior, null, 2) + '</pre>';

  displayElement.innerHTML += '<h2>Mid-Level Employees</h2>';
  displayElement.innerHTML +=
    '<pre>' + JSON.stringify(midLevel, null, 2) + '</pre>';

  displayElement.innerHTML += '<h2>Senior Employees</h2>';
  displayElement.innerHTML +=
    '<pre>' + JSON.stringify(senior, null, 2) + '</pre>';

  displayElement.innerHTML += '<h2>Student</h2>';
  displayElement.innerHTML +=
    '<pre>' + JSON.stringify(student, null, 2) + '</pre>';

  displayElement.innerHTML += '<h2>Name to Age Map</h2>';
  displayElement.innerHTML +=
    '<pre>' + JSON.stringify(nameToAgeMap, null, 2) + '</pre>';
});
