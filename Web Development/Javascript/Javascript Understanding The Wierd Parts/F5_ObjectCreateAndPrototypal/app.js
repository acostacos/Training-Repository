var person = {
    firstname: 'Default',
    lastname: 'Default',
    greet: function() {
        return 'Hi ' + this.firstname;
    }
}

// Object.create allows you to use pure prototypal inheritance
// This is built in to all modern browsers
// What Object.create does is to set the object within to be the prototype of the created empty obejct
var john = Object.create(person);
console.log(john);

// We can then overwrite the properties themselves after
john.firstname = 'John';
john.lastname = 'Doe';
console.log(john);
console.log(john.greet());


// Polyfill for Object.create
if (!Object.create){
    Object.create = function(o){
        if(arguments.length > 1){
            throw new Error('Object.create implementation only accepts the first parameter.');
        }

        function F() {}
        F.prototype = o;
        return new F();
    }
}