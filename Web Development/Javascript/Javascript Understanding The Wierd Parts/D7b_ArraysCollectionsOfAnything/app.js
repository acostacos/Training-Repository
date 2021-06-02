var hardArr = new Array()
// Array literal syntax
var arr = []

// Javascript allows arrays to contain a lot of different types
// Javascript arrays -> collections of anything
arr = [
    1,
    false,
    {
        name: 'Tony',
        address: '111 Main St.'
    },
    function(name){
        var greeting = 'Hello '
        console.log(greeting + name)
    },
    'hello'
]

console.log(arr)
arr[3](arr[2].name)