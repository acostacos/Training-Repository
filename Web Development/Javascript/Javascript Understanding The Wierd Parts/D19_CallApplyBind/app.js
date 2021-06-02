var person = {
    firstname: 'John',
    lastname: 'Doe',
    getFullName: function(){
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

var logName = function(lang1, lang2){
    console.log('Logged: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('----------------------')
}

// Initially, the function above will fail because this is pointing to the global object
// bind - makes a copy of the function and sets the passed parameter as the 'this' keyword
var logPersonName = logName.bind(person);
logPersonName();

logPersonName('en');
// call - invokes the function but also lets me control what 'this' will be
// can also call parameters
// Doesn't create a copy like bind but instead just runs it
logName.call(person, 'en', 'es');
// apply - exactly the same as call EXCEPT it wants an array of arguments
// Sometimes, arrays are more useful to deal with
logName.apply(person, ['en', 'es']);

// Can also use these functions in IIFE
(function(lang1, lang2){
    console.log('Logged: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('----------------------')
}).apply(person, ['en', 'es']);

// Function borrowing
var person2 = {
    firstname: 'Jane',
    lastname: 'Doe',
}

console.log(person.getFullName.apply(person2));

// Function currying - creating a copy of a function but with set parameters
function multiply(a, b){
    return a*b;
};
// This will set a permanent value for the argument in the function
var multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(4));

var multiplyByThree = multiply.bind(this, 3);
console.log(multiplyByThree(4));
