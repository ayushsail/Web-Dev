console.log("OPERATORS");

let a = 5;
let b = 6;


// Arithmetic Operators

console.log("\nArithmetic Operators\n");
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a ** b);
console.log(a / b);
console.log(a % b);


//  Assignment Operators

console.log("\nAssignment Operators\n");
a += b;
console.log(a);
a = 5;
a -= b;
console.log(a);
a = 5;
a *= b;
console.log(a);
a = 5;
a **= b;
console.log(a);
a = 5;
a /= b;
console.log(a);
a = 5;
a %= b;
console.log(a);


// Comparison Operators

console.log("\nComparison Operators\n");
console.log(a == b);
console.log(a != b);
console.log(a === b);   // equal value or type
console.log(a !== b);   // not equal value or type
console.log(a > b);
console.log(a >= b);
console.log(a < b);
console.log(a <= b);

console.log('3' == 3)   // True
console.log('3' === 3)  // False


// Logical Operators
console.log("\nLogical Operators\n");
console.log(a != b && b != a)   // true
console.log(a == b || b == a)   // false




// Conditional Statements

console.log("\nCONDITIONAL STATEMENTS\n");
let age = 5;

// if - else 
if (age>18) {
    console.log("You can drive");
}
else {
    console.log("You cannot drive");
}

// if - else-if ladder
if (age >= 18) {
    console.log("You can drive")
}
else if (age >=0 && age <=5) {
    console.log("are you kidding me!!!")
}
else {
    console.log("you cannot drive")
}

// Ternary Operator(?)
console.log("\nTernary Operator\n")
let c = 80
let d = 60
console.log(c>d ?(c-d) : (d-c))     // (condition ?(Operation) : (else operation))
console.log()

/*
translates to:
if(c>d){
    c - d;
}
else {
    d - c;
}
*/


let drive = age >= 18 ? ("you can drive") : ("you cannot drive");
console.log(drive)