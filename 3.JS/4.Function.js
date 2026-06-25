console.log("FUNCTIONS\n")
/*
function template :
function name(params) {
    operation to return or print
}
*/

function greet(name) {
    console.log("Good Morning " + name + "\nHow are you?\n")
}

greet("Ayush")

function sum(a,b) {
    return `${a} + ${b} = ${a + b}\n`
}
console.log(sum(5,6))
console.log(sum(3,2))



// ARROW FUNCTION
console.log("Arrow function\n")
// arrow function is convenient function
// this is becomes a variable and function both 

const div = (a,b) => {
    return `${a} / ${b} = ${a / b}\n`
}

console.log(div(5,6))