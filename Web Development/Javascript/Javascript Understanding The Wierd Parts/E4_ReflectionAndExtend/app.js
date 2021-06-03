var person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function() {
        return this.firstname + ' ' + this.lastname;  
    }
}

var john = {
    firstname: 'John',
    lastname: 'Doe'
}

// don't do this EVER! for demo purposes only!!!
john.__proto__ = person;


// For in doesn't get properties only in the object but also in its prototype
for (var prop in john){
    // This function checks if it is john that has the object and not the property
    // This checks the metadata of the properties to see whether it is really attached to the object
    if(john.hasOwnProperty(prop)){
        console.log(prop + ': ' + john[prop]);
    }
}

// Can use this to implement extend - not built in to Javascript
var jane = {
    address: '111 Main St.',
    getFormalFullName: function(){
        return this.lastname + ', ' + this.lastname;
    }
}

var jim = {
    getFirstName: function(){
        return this.firstname;
    }
}

// What this does is it gets the properties of Jane and Jim and adds it to John
// Combines properties
_.extend(john, jane, jim);
console.log(john);

/*
    Source code:
    function(obj) {
      var length = arguments.length;
      if (length < 2 || obj == null) return obj;
      for (var index = 1; index < length; index++) {
        var source = arguments[index],
            keys = keysFunc(source),
            l = keys.length;
        for (var i = 0; i < l; i++) {
          var key = keys[i];
          // Uses reflection to check its properties and set it to john
          if (!undefinedOnly || obj[key] === void 0) obj[key] = source[key];
        }
      }
      return obj;
    };
*/