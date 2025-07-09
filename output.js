//exporting literals
// const { greeting, pi, isActive } = require('./sample');
// console.log(greeting);
// console.log(pi);
// console.log(isActive);

//exporting objects
const myObject = require('./sample');
console.log(myObject.name);
console.log(myObject.age);
console.log(myObject.greet());