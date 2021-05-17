// by value (primitives)
var a = 3
var b

b = a
a = 2
console.log(a)
console.log(b)

// by reference (all objects)
var c = { greeting: 'hi' }
var d

d = c
c.greeting = 'hello' // mutate the object
console.log(c)
console.log(d)

// by reference (even as paramters)
function changeGreeting(obj){
    obj.greeting = 'Hola' // mutate
}

changeGreeting(d)
console.log(c)
console.log(d)

// equals operator sets up a new memory space (new address)
// If second paramter doesn't take up an existing space in memory, it has to make a new spot and make the variable point to that
c = { greeting: 'howdy' }
console.log(c)
console.log(d)