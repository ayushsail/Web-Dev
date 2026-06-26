console.log("STRINGS\n")

let a = "This is a string"
console.log(a)
console.log(typeof a)
console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])


// template literals - backtick(`)
console.log(`This is a string  saying "${a}"\n`)



// STRING PROPERTIES & METHODS - STRING IS IMMUTABLE
console.log("STRING PROPERTIES & METHODS\n")

let b = "Rajashree"
console.log(b.length)   // lenght is a property, so no parenthesis after lenght
console.log(b.toUpperCase())    // this is method/func, so parenthesis after method/func
console.log(b.toLowerCase())
console.log(b.replace("sh",77))
console.log(b.concat(a))
console.log(b.charAt(3))
console.log(b.indexOf("e"))
console.log(b.indexOf("z"))     // return -1
console.log(b.startsWith("R"))
console.log(b.endsWith("e"))



// SLICING
console.log("\nSLICING\n")

// slice(start,end), end is not included

let c = "Harshvardhan"
console.log(c.slice(1,6))   // arshv
console.log(c.slice(2))   // index 2 till end   


// ESCAPE SEQUENCES
// \" --> to use double quote inside a string
// \' --> to use single quote inside a string
// \n --> new line
// \t --> tab space
// \r --> carriage return