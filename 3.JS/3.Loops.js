console.log("LOOPS\n")


// FOR LOOP
console.log("for loop\n")
/*
for(initialization,condition,increment/decrement) {
    operation
    }
    
    for loop template :
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        
        }
        */


for (let i = 1; i <= 10; i++) {
    console.log(i)
}


// FOR IN LOOP
console.log("\nfor in loop\n")
/*
for (const key in object) {
    operation
    }
    
    for in loop template :
    for (const key in object) {
        if (!Object.hasOwn(object, key)) continue;
        
        const element = object[key];
        }
        */


let obj = {
    name: "Ayush",
    role: "Programmer",
    age: 19
}
for (const key in obj) {
    console.log(key)
}


// FOR OF LOOP

console.log("\nfor of loop\n")


/*
for(const iterator of object) {
operation
}

for of loop temeplate :
for (const element of object) {
 
}
*/

for (const c of "Ayush") {
    console.log(c)
}


// WHILE LOOP
console.log("\nwhile loop\n")

/*
while loop template :
while (condition) {
    
}
*/
let i = 1;
while (i <= 10) {
    console.log(i)
    i++
}


// DO - WHILE LOOP
console.log("\ndo while loop\n")

/*
do while loop template :
do {
    
} while (condition);
*/
i = 10
do {
    console.log(i)
    i--
} while (i > 0);
