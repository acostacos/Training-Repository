function getPerson(){
    // Return undefined because Javascript syntax parser automatically puts a semicolon after a return statement
    // Automatic Semicolon Insertion changes it for you
    /*
    return 
    {
        firstname: 'Tony'
    }
    */

    // We need to write it as
    return {
        firstname: 'Tony'
    }
}

console.log(getPerson())