// Every execution context has its own variable environment
// Each myVar is distinct and unique from each other

function b() {
    var myVar; // Variable environment: b execution context
    console.log(myVar);
}

function a() {
    var myVar = 2; // Variable environment: a execution context
    console.log(myVar);
    b();
}

var myVar = 1; // Variable environment: Global Execution Context
console.log(myVar);
a();