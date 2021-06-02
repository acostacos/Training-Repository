var objectLiteral = {
    firstname: 'Mary',
    isAProgrammer: true,
}
console.log(objectLiteral)
console.log(JSON.stringify(objectLiteral))

/*
JSON Format
{
    "firstname": "Mary",
    "isAProgrammer": true
}
*/
var jsonValue = JSON.parse('{ "firstname": "Mary", "isAProgrammer": true }')
console.log(jsonValue)