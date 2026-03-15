let myStr = "Hello, World!";
console.log(`Position [0]: ${myStr[0]};`)
console.log(`Position [5]: ${myStr[5]};`)
console.log(`Position [6]: ${myStr[6]};`)
console.log(`Position [7]: ${myStr[7]};`)
console.log(`Position [12]: ${myStr[12]};`)
console.log(`Length of string: ${myStr.length}`);
console.log(`Last character: ${myStr[myStr.length - 1]}`);

let strUserName = "  John Smith  ";
  
console.log(strUserName.trim());
console.log(strUserName.toLowerCase());
console.log(strUserName.toUpperCase());
console.log(strUserName.trim().toLowerCase());
  
let strMessage = "Hello from JavaScript string variable";
console.log(strMessage);
  
strMessage.toUpperCase();
console.log(strMessage);

strMessage = strMessage.toUpperCase();
console.log(strMessage);
       
let txtFirstName = "John";
let txtLastName = "Lennon";
let txtFullName = `${txtFirstName} ${txtLastName}`; 
console.log(`Full name: ${txtFullName}`);

txtFullName = txtFirstName+ " " +txtLastName; 
console.log(`Full name: ${txtFullName}`);

let greeting = "Hello";
greeting += " there";
greeting += "!";
console.log(greeting);
        
let story = "Once upon a time";
story += " there was a developer";
story += " who loved to code";
story += " and debug all day long.";
console.log(story)

const myVar1 =  1234;
const myVar2 = "1234";
const myVar3 = '1234';
const myVar4 = `1234`;
console.log(`${myVar1} ${myVar2} ${myVar3} ${myVar4}`);

let Temperature = -6.3456
let errorRate = .2727

const firstNum = 12;
const secondNum = 8;
console.log(`Addition (12+8): ${firstNum + secondNum}`);
console.log(`Subtraction (12-8): ${firstNum - secondNum}`);
console.log(`Multiplication (12*8): ${firstNum * secondNum}`);
console.log(`Division (12/8): ${firstNum / secondNum}`);

console.log(`5 + 2 * 3: ${5 + 2 * 3}`);

console.log(`(5 + 2) * 3: ${(5 + 2) * 3}`);

let myNum1 = 7;
let myNum2 = 24; 	
console.log(`myNum1 is 7`); 
console.log(`Increment operator (++myNum1) is ${++myNum1}`);
console.log(`myNum2 is 24`); 
console.log(`Decrement operator (--myNum2) is ${--myNum2}`);

let count = 5;
console.log(count);
count += 3;
count += 2;

let playerScore = 100;
playerScore += 50;
playerScore += 25;
playerScore += 75;
console.log(playerScore);

let balance = 1000;
let interest = balance * 0.05;
balance += interest;
console.log(balance);