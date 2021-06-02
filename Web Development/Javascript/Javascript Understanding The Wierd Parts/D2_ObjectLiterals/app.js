// Object literal - creates a new object
var person = {}
console.log(person)

// Can set up properties when defining
var Tony = {
    firstname: 'Tony',
    lastname: 'Alicea',
    address: {
        street: '111 Main St.',
        city: 'New York',
        state: 'NY',
    },
}
console.log(Tony)

function greet(person){
    console.log(`Hi ${person.firstname}`)
}
greet(Tony)
// Can create objects on the fly
greet({
    firstname: 'Mary',
    lastname: 'Doe',
})