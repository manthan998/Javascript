// console log

console.log("hello js");


let a = 10
let b = 20

console.log(a+b)

//JavaScript Variables

// it has 4 type
// >>> Automatically
// >>> Using var
// >>> Using let
// >>> Using const

// >>> Automatically

x = 12;
y = 34;

console.log(x+y)

// >>> Using var

var x = 12;
var y = 34;

console.log(x+y)

// >>> Using let have Block Scope || cannot be Redeclared in the same scope

let u = 12;
let v = 34;

console.log(u+v)

// >>> Using const have Block Scope || cannot be Redeclared || cannot be Reassigned

const c = 12;
const d = 34;

console.log(c+d)

//JavaScript Operators

// There are different types of JavaScript operators:

// >> Arithmetic Operators
// >> Assignment Operators
// >> Comparison Operators
// >> String Operators
// >> Logical Operators
// >> Bitwise Operators
// >> Ternary Operators
// >> Type Operators

// Arithmetic Operators

// +	Addition 
console.log(a+b);
// -	Subtraction
console.log(a-b);
// *	Multiplication
console.log(a*b);
// **	Exponentiation (ES2016)
console.log(a**b);
// /	Division
console.log(a/b);
// %	Modulus (Division Remainder)
console.log(a%b);
// ++	Increment
console.log(a++);
// --	Decrement
console.log(a--);

// JavaScript Assignment

// =	
// += 
// -= 
// *= 
// /= 
// %= 
// **=

//JavaScript Comparison Operators

// ==	equal to
// ===	equal value and equal type
// !=	not equal
// !==	not equal value or not equal type
// >	greater than
// <	less than
// >=	greater than or equal to
// <=	less than or equal to
// ?	ternary operator

//JavaScript Bitwise Operators

// &	AND		
// |	OR		
// ~	NOT	
// ^	XOR		
// <<	left shift	
// >>	right shift	
// >>>	unsigned right shift

// JavaScript Data Types

// JavaScript has 8 Datatypes
// 1. String
// 2. Number
// 3. Bigint
// 4. Boolean
// 5. Undefined
// 6. Null
// 7. Symbol
// 8. Object

// The Object Datatype
// The object data type can contain:

// 1. An object
// 2. An array
// 3. A date

// Numbers:
let cd = 16;
let er = 7.5;
console.log(typeof(cd))

// Strings:
let fname = "manthan";
let lname = "panchal";
console.log(typeof(fname))

// Booleans
let e = true;
let f = false;
console.log(typeof(e))

// Object:
const person = {firstName:"manthan", lastName:"panchak"};
console.log(typeof(person))

// Array object:
const employee = ["jon", "jay", "jaylo"];
console.log(typeof(employee))

// Date object:
const date = new Date("2012-22-23");
console.log(typeof(date))

//functions 

function testing() {
    console.log("this is testing funcatio")
}

function arg(e,f) {
    console.log(e+f)
    
}

testing();
arg(10,23);

//arrow function

const arrowfunction = () => {
    console.log("this is demo of fat arrow function ")
}

arrowfunction();




