function greet(name){
    // Way to set default value in ES6 -> function(args = 'defaultValue'){...}
    name = name || '<Your Name Here>' // Old way of setting default value (pre ES6)
    console.log('Hello ' + name)
}

greet('Tacos')
greet() // Javascript will still run the function and name will be undefined (if no default value)