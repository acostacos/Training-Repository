function greet(firstname, lastname, language){
    // Example of using arguments
    if(arguments.length === 0){
        console.log('Missing parameters!')
        console.log('-----------')
        return
    }

    console.log(firstname)
    console.log(lastname)
    console.log(language)
    // special keyword - returns an arraylike of parameters
    console.log(arguments)
    console.log('Arg 0: ' + arguments[0])
    console.log('-----------')
}

// You can call greet AND have no parameters passed to it (no error)
// This is because hoisting includes the parameters
greet()
// If you pass, it assumes you pass from left to right
// Thus, in the case below, firstname = John, lastname = undefined, language = undefined
greet('John')
greet('John', 'Doe')
greet('John', 'Doe', 'en')

// You can set default parameters
// function greet(firstname, lastname, language = 'en'){...}
// OR the older way -> language = language || 'en'

// As time goes on, argument keyword will be deprecated (because of spread)
// ex. function greet(firstname, lastname, language, ...other)
// All extra parameters get added to the other array