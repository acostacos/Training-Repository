console.log(1 < 2 < 3) // true
console.log(3 < 2 < 1) // true
// What happens here is that 3 < 2 runs first so we are left with false < 1
// Because of coercion, it will convert the boolean false into 0
// Thus, 0 < 1 will turn into true

Number(undefined) // NaN - not a number
Number(null) // 0

var a = 0
var b = false

if(a == b){
    console.log('Passed inequality')
}
if(a===b){
    console.log('Passed strict inequality')
}