// At this level in the code, this points to global object
console.log(this)

// When you create a function, the this keyword still points to the global object
function a(){
    console.log(this)
    this.newvariable = 'hello'
}

var b = function(){
    console.log(this)
}

a()
console.log(newvariable)
b()

// In an object method, this points to the object that that this method is inside of
var c = {
    name: 'The c object',
    log: function(){
        // If you use this, self will always point to the object instance no matter what this is
        // No need to worry about what this will point to 
        var self = this

        this.name = 'Updated c object'
        console.log(this)

        // HOWEVER, when you define a function within a function, it will point to the global object instead
        // this will only point to object instance when it is a direct method
        var setName = function(newname){
            // this.name = newname
            self.name = newname
        }
        setName('Updated again the c object')
        console.log(this)
    }
}

c.log()

