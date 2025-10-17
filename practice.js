
let name = "Pranav";      
let age = 20;             
let isStudent = true;     

console.log("Name",name)
console.log("Age:", age);
console.log("Is Student:", isStudent);

let num1 = 15;
let num2 = 5;

let sum = num1 + num2;
let minus = num1 - num2;
let mul = num1 * num2;
let divide = num1 / num2;

console.log("Addition:", sum);
console.log("Subtraction:", minus);
console.log("Multiplication:", mul);
console.log("Division:", divide);


let fruits = ["Orange", "Banana", "Mango", "Apple"];
console.log("Fruits:", fruits);
console.log("First Fruit:", fruits[0]);
console.log("Total Fruits:", fruits.length);
fruits.push("Pineapple"); 
console.log("Fruits:", fruits);    
fruits.pop();  
console.log("Fruits:", fruits);                 
console.log(fruits.includes("Mango")); 
console.log(fruits.indexOf("Banana")); 
console.log(fruits.join(", "));        
console.log(fruits.slice(0, 2));       
console.log(fruits.sort());            
fruits.splice(1, 1, "Papaya"); 
console.log("Fruits:", fruits);          
let moreFruits = ["Grapes", "Pineapple"];
let allFruits = fruits.concat(moreFruits);
console.log("Fruits:", allFruits);   
allFruits.forEach(fruit => console.log("Fruit:", fruit)); 
let upperCaseFruits = allFruits.map(fruit => fruit.toUpperCase()); 
let longNamedFruits = allFruits.filter(fruit => fruit.length > 6); 
let reversedFruits = allFruits.reverse(); 
console.log("After Splice:", fruits);
console.log("After Concat:", allFruits);
console.log("Uppercase Fruits:", upperCaseFruits);
console.log("Long Named Fruits:", longNamedFruits);
console.log("Reversed Fruits:", reversedFruits);
   
function hello(){
  console.log("Hello World");
}
hello()

function IFSUser(username) {
  console.log("Hello, " + username + "! IFS Academy.");
}

IFSUser("pranav"); 

function oddeven(num1){
  if (num1 % 2 ==0){
    console.log("The number is even");
  }else{
    console.log("The number is odd");
  }
}
oddeven(12)

function factorial(num2) {
  if (num2 == 0 || num2 == 1) {
    console.log("The number is not valid, enter another number");
  } else {
    let fact = 1;
    for (let i = 1; i <= num2; i++) {
      fact = fact * i;
    }
    console.log(fact);
  }
}

factorial(5);

function addNumbers(a, b) {
  let total = a + b;
  return total;
}

let result = addNumbers(10, 25);
console.log("Sum is:", result);


let marks = [78, 85, 90, 66, 59];
console.log("Marks:", marks);


let totalMarks = 0;
for (let i = 0; i < marks.length; i++) {
  totalMarks = totalMarks + marks[i];
}
let average = totalMarks / marks.length;
console.log("Average Marks:", average);


if (average >= 90) {
  console.log("Grade: A");
} else if (average >= 80) {
  console.log("Grade: B");
} else if (average >= 70) {
  console.log("Grade: C");
} else if (average >= 60) {
  console.log("Grade: D");
} else {
  console.log("Grade: F (Need Improvement)");
}


let su=function(a,b){
  return a+b;
}
console.log(su(19,22));

let di=function(a,b){
  return a/b;
}

let muy=function(a,b){
  return a*b;
}

function operation(operate,a,b){
  return operate(a,b);
}

console.log(operation(di,2,3));
console.log(operation(muy,2,7));

let yi=(p,q) => {
  return p**q;
}
console.log(yi(2,7));

let yis=(o,p) => o+p;
console.log(yis(1,2))