// We can change the prototype of built in Javascript function constructors
String.prototype.isLengthGreaterThan = function(limit){
    return this.length > limit;
}

console.log('John'.isLengthGreaterThan(3));

Number.prototype.isPositive = function(){
    return this > 0;
}

// This will return error because numbers arent automatically converted to objects like strings
// console.log(3.isPositive());

var a = new Number(3);
console.log(a.isPositive());