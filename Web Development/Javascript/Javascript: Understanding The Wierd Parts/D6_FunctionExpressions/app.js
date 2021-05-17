// Function statement - doesn't return a value
greet()
function greet(){
    console.log('hi')
}

// anonymousGreet() - will return an error because during hoisting, anonymousGreet is undefined

// Anonymous function - no name in name property, referenced through variable
// Function expression - because you end up with a value in the execution phase (object created)
var anonymousGreet = function() {
    console.log('hi')
}
anonymousGreet()


function log(a){
    if(typeof a === 'function'){
        // To run a function in a function, just use ()
        a()
    }
    else{
        console.log(a)
    }
}

log(3)
log('Hello')
log({
    greeting: 'hi'
})
// You can create function objects on the fly and pass it to a function
// First class functions - can be created and set on the fly
log(function(){
    console.log('this is called inside')
})
