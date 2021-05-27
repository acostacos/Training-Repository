function buildFunctions(){
    var arr = [];

    for (var i = 0; i<3; i++){
        arr.push(function(){
            console.log(i);
        })
    }

    return arr;
}

var fs = buildFunctions();

// This will output 3 in all cases
fs[0]();
fs[1]();
fs[2]();

// The reason for this is that when the array is created, it doesnt run the function yet. It just holds a reference to the variable i which it will log later on
// When it is invoked, i = 3 because of the for loop



function buildFunctions2(){
    var arr = [];

    for (var i = 0; i<3; i++){
        // In ES6, let variable means that it is scoped to a block
        // This means it will be a new variable in memory every time this block is run
        let j = i;
        arr.push(function(){
            console.log(j);
        })
    }

    return arr;
}

var fs2 = buildFunctions2();

fs2[0]();
fs2[1]();
fs2[2]();