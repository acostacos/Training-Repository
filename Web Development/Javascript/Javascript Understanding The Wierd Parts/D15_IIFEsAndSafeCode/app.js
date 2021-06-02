// IIFE
var firstname = 'John';

(function(global, name) {
    // No collision with greet.js BECAUSE it is in its own execution stack
    // This is a safe way for frameworks to write code without collision
    var greeting = 'Hello';
    // You can overwrite the global object intentionally
    global.greeting = 'This will collide with greet.js';
    console.log(greeting + ' ' + name);
    
// Pass the global object as a parameter if you want to be able to access it
}(window, firstname)); // IIFE























