var person = new Object()

person['firstname'] = 'Tony'
person['lastname'] = 'Alicea'

// You can use variables for Computed Member Access Operator (useful for dynamic properties)
var firstNameProperty = 'firstname'

console.log(person)
console.log(person[firstNameProperty])

// You can also use dot operator or Member Access Operator (preferred way)
console.log(person.firstname)
console.log(person.lastname)

person.address = new Object()
person.address.street = '111 Main St.'
person.address.city = 'New York'
person.address.state = 'New York'

console.log(person.address.street)
console.log(person.address.city)
console.log(person['address']['state'])