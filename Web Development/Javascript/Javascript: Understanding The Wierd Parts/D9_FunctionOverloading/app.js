function greet(firstname, lastname, language) {
    language = language || 'en';

    if(language === 'en'){
        console.log(`Hello ${firstname} ${lastname}`)
    }
    if(language === 'es'){
        console.log(`Hola ${firstname} ${lastname}`)
    }
}

// We can do function overloading by creating a function that will have default parameters for the initial function
function greetEnglish(firstname, lastname){
    greet(firstname, lastname, 'en')
}

function greetSpanish(firstname, lastname){
    greet(firstname, lastname, 'es')
}
    
greet('John', 'Doe', 'en')
greet('John', 'Doe', 'es')
greetEnglish('John', 'Doe')
greetSpanish('John', 'Doe')

// A lot of different patterns to handle function overloading. This is just one way.