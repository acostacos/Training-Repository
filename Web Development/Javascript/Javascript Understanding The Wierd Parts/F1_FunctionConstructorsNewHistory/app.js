// Different ways to build objects
// Function Constructor - they are just functions
// Can add arguments to vary the data it is initialized with
function Person(firtname, lastname){
    // Empty object at the start
    console.log(this);
    this.firstname = firtname;
    this.lastname = lastname;
    console.log('This function is invoked');

    // Can mess with the object being returned by returning something else
    // return {greeting: 'I am in the way'};
}

// new keyword is an operator --> an empty object is immediately created
// this in the execution context of function becomes the empty object
// It then returns the new object being made
var john = new Person('John', 'Doe');
console.log(john);

// Can be invoked multiple times
var jane = new Person('Jane', 'Doe');
console.log(jane);