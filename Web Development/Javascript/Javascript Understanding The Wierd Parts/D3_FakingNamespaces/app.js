var greet = 'Hello!';
var greet = 'Hola!'; 

console.log(greet);

// Objects can be used as namespaces
var english = {}
var spanish = {}

english.greet = 'Hello'
spanish.greet = 'Hola'

console.log(english.greet)
console.log(spanish.greet)

// You can make nested objects for deeper namespaces
// english.greeting.greet - returns error because greeting is not defined yet as an object
english.greetings = {}
english.greetings.greet = 'Hello'
// OR you can define it already using object literal syntax
var english = { greetings: { basic: 'Hello!' } }
console.log(english)