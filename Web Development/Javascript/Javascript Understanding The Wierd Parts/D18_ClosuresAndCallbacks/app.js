function sayHiLater(){
    var greeting = 'Hi!';

    // Used function expressions and first class functions
    // Using closure also since 3 seconds later, sayHiLater would have finished running but you still know the value of greet
    setTimeout(function(){
        console.log(greeting);
    }, 3000);
}

sayHiLater();

// In jQuery, you also use first class functions

// Passing a function into another function and calling it later is called a callback function - runs the passed function once it finishes
function tellMeWhenDone(callback){
    var a = 1000; //some work
    var b = 2000; // more work

    callback(); // run callback after
}

tellMeWhenDone(function(){
    alert('I am done!');
})