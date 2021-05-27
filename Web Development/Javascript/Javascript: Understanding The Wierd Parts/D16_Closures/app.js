// Function that returns a function that you can call again
function greet(whattosay){
    return function(name) {
        console.log(whattosay + ' ' + name);
    }
}

var sayHi = greet('Hi');
// whattosay should be removed once its execution finishes yet it still knows what to say when you call it after
// This is due to closure - makes sure that the scope is still intact
sayHi('Tony');
