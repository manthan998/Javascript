console.log("events")

//string events

let text = "this is change thing also change";
let length = text.length;


console.log(length) //length

console.log(text.charAt(5)) //give the position of char at

console.log(text.slice(7, 13)) /// slice first starting position another is ending position

console.log(text.substr(7, 6))

console.log(text.toUpperCase); //for upper case
console.log(text.toLowerCase); //for lower case

let text1 = "manthan";
let text2 = "panchal";
console.log(text1.concat(" ", text2))// to joint two string 

let text4 = "      Hello World!      ";
console.log(text4.trim())// to remove white space
console.log(text4.trimStart()) // remove start
console.log(text4.trimEnd()) // remove end
text.split(",")    // Split on commas
text.split(" ")    // Split on spaces
text.split("|")    // Split on pipe

console.log(text.search("is")) // gives postion is its available 
console.log(text.match("is"))


//number events

let g = 123;
g.toString(); // Returns a number as a string

//array events 


const names = ["manthan", "panchal", "jay", "patel"];

console.log(names.length) //gives length
console.log(names.toString) // convert into string 
console.log(names.join(" * ")) // joint with specific value

console.log(names.pop) // remove last 
names.push("darshan")
console.log(names) // push in the end

console.log(names.shift) // remove from first
console.log(names.unshift("patelss")) // add at the first

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren = arr1.concat(arr2, arr3); //merge
console.log(myChildren)


console.log(names.sort()) // sorting 
console.log(names.reverse()) //reverse      