var person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function(){
        return this.firstname + ' ' + this.lastname;
    }
};

var john = {
    firstname: 'John',
    lastname: 'Doe'
};

// NEVER do this in real life
// You don't want to access the prototype directly because it will slow down your application
// This is strictly for demo
john.__proto__ = person;
// With this, we can use the functions of person on john
console.log(john.getFullName());
// It looks through all the properties of the current object first before moving down
// The code below will return John and NOT Default
console.log(john.firstname);

var jane = {
    firstname: 'Jane'
};
jane.__proto__ = person;
// If you try to access a property that it doesn't have, thats when it goes down the prototype chain
console.log(jane.getFullName());





var a = {};
var b = function(){};
var c = [];