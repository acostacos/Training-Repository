function greet() {
    console.log('hi')
}

// You can do this because in Javascript, FUNCTIONS ARE OBJECTS
greet.language = 'english'
console.log(greet)
console.log(greet.language)