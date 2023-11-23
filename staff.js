document.addEventListener('DOMContentLoaded', () => {
  const displayElement = document.getElementById('staffData');

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
    (person) => person.age >= 30 && person.age < 40,
  );
  const senior = employees.filter((person) => person.age >= 40);
  const student = employees.find((person) => person.occupation === 'Student');
  const nameToAgeMap = employees.reduce((obj, employee) => {
    obj[employee.firstName] = employee.age;
    return obj;
  }, {});

  // Function to create and append a new HTML element, and return it
  function appendElement(parent, elementType, content) {
    const element = document.createElement(elementType);
    element.innerHTML = content;
    parent.appendChild(element);
    return element; // Return the created element
  }

  // Display data in HTML format
  appendElement(displayElement, 'h2', 'All Employees');
  employees.forEach((employee) => {
    const employeeDiv = appendElement(
      displayElement,
      'div',
      `<b>Name:</b> ${employee.firstName} ${employee.lastName}, <b>Age:</b> ${employee.age}, <b>Occupation:</b> ${employee.occupation}`,
    );
    employeeDiv.classList.add('employeeInfo'); // Add class to each employee div
  });

  appendElement(displayElement, 'h2', 'Mid-Age Employees');
  midLevel.forEach((employee) => {
    appendElement(
      displayElement,
      'div',
      `<b>Name:</b> ${employee.firstName} ${employee.lastName}, <b>Age:</b> ${employee.age}, <b>Occupation:</b> ${employee.occupation}`,
    );
  });

  appendElement(displayElement, 'h2', 'Older Employees');
  senior.forEach((employee) => {
    appendElement(
      displayElement,
      'div',
      `<b>Name:</b> ${employee.firstName} ${employee.lastName}, <b>Age:</b> ${employee.age}, <b>Occupation:</b> ${employee.occupation}`,
    );
  });

  appendElement(displayElement, 'h2', 'Student');
  appendElement(
    displayElement,
    'div',
    `<b>Name:</b> ${student.firstName} ${student.lastName}, <b>Age:</b> ${student.age}, <b>Occupation:</b> ${student.occupation}`,
  );

  appendElement(displayElement, 'h2', 'Name to Age Map');
  Object.keys(nameToAgeMap).forEach((name) => {
    appendElement(
      displayElement,
      'div',
      `<b>Name:</b> ${name}, <b>Age:</b> ${nameToAgeMap[name]}`,
    );
  });

  // Highlight code using Prism.js
  Prism.highlightAll();
});
