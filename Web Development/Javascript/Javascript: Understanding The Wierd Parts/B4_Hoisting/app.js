// For other languages, this would not work because they are called before they are defined

b();
console.log(a);

// If you comment out a and console log it, then it will return an error. But if it is defined and console.log is called before it, then it will return undefined
var a = 'Hello World!';

function b() {
    console.log('Called b!');
}

