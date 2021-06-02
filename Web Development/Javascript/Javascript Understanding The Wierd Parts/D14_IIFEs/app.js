// Function statement
function greet(name){
    console.log('Hello ' + name);
};
greet();

// Function expression
let greetFunc = function(name){
    console.log('Hello ' + name);
};
greetFunc();

// We can invoke code of function on the fly
// Immediately Invoked Function Expression (IIFE)
var greeting = (function(name){
    return 'Hello ' + name;
})('John');

// VS normal function
var greeting2 = function(name){
    return 'Hello ' + name;
};

console.log(greeting);
console.log(greeting2);

var firstname = 'John'
// Stand alone IFFE
// You cannot let normal functions stand alone in the code because it will result in Syntax error
(function(name){
    var greeting = 'Hello'
    console.log('Inside IIFE: ' + greeting + ' ' + name);
})(firstname);
// This will parse the function as a function expression (because it is inside parenthesis)