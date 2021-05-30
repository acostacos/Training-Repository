var arr1 = [1,2,3];
console.log(arr1);

// Normal approach of making a new array
// var arr2 = [];
// for(var i = 0; i<arr1.length; i++){
//     arr2.push(arr1[i]*2);
// }

// Instead, we can just make a function that would abstract making a new array
// We can reduce the amount of code and only have to care about what we do to each item
// Allows you to build clean code that is easy to understand
function mapForEach(arr, fn){
    var newArr = [];
    for(var i = 0; i<arr.length; i++){
        newArr.push(
            fn(arr[i])
        );
    }
    return newArr;
}

var arr2 = mapForEach(arr1, function(item){
    return item * 2;
});
console.log(arr2);

var arr3 = mapForEach(arr1, function(item){
    return item > 2;
});
console.log(arr3);

// Lets say you have an array that has 2 parameters but you need it to only accept 1
var checkPastLimit = function(limiter, item){
    return item > limiter;
}
// You can use bind to create a default value for the parameter
var arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1));
console.log(arr4);

// Another way to do this is to create a function that returns a function given the limiter
var checkPastLimitSimplified = function(limiter){
    return function(limiter, item){
        return item > limiter;
    }.bind(this, limiter);
}
var arr5 = mapForEach(arr1, checkPastLimitSimplified(1));
console.log(arr5);