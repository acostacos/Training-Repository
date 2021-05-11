// Good practice to put the functions at the top
function b() {
    console.log('Called b!');
}

b(); // Called b!

console.log(a); // undefined

var a = 'Hello World!';

console.log(a); // Hello World!



// ------------------------------------------------

function b() {
    
}

function a() {
    b();
}

a();

// What if

function a() {
    b();
    var c;
}

function b(){
    var d;
}

a();
var d; // This won't be called until a() is done -> Javascript is synchronous and single-threaded