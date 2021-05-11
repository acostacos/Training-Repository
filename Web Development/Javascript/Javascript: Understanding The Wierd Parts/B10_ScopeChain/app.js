function b() {
	console.log(myVar);
}

function a() {
	var myVar = 2;
	b();
}

var myVar = 1;
a();

// Different lexical environment, different scope chain
function a() {
	function b() {
		console.log(myVar);
	}
	
	var myVar = 2;
	b();
}

var myVar = 1;
a();
// b() will return an error because b is not under the global execution context