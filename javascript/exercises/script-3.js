function displayGreeting() {
   console.log('Hello, world!');
}
function displayGreeting() {
   console.log('Hello, world!');
}
displayGreeting();
function showNumber(num) {
   console.log(`Number passed as parameter is: ${num}`);
}
showNumber(21); 
function addTwoNumbers(num1, num2) {
    console.log(`Sum is : ${num1 + num2}`); 
}
addTwoNumbers(1, 2);

function addTwoNumbers(num1, num2) {
    return (num1 + num2);
    console.log(`Sum is : ${num1 + num2}`); 
}

let result = addTwoNumbers(1, 2);
console.log(`Returned result: ${result}`);

function showMessage(message) {
   console.log(message);
}

showMessage();

function showMessage(message="An error occured. Contact support.") {
   console.log(message);
}

showMessage();
showMessage('Hi, there');

function averageThreeNums(x, y, z) {
   console.log(`Average of three numbers is: ${(x + y + z)/3}`);
}
		
averageThreeNums(1,2,3,4,5,6);
averageThreeNums(1,2,3,4,5);
averageThreeNums(1,2,3,4);
averageThreeNums(1,2,3);

function isValidNumber(value) {
    const num = Number(value);
    return !isNaN(num) && isFinite(num);
}
        
console.log(isValidNumber(123));
console.log(isValidNumber("12.34"));
console.log(isValidNumber("abc"));
console.log(isValidNumber(Infinity));

function roundMoney(amount) {
   return Math.round(amount * 100) / 100;
}

console.log(roundMoney(10.567));
console.log(roundMoney(10.564));

function getRandomInt(min, max) {
    const range = max - min + 1;
    return Math.floor(Math.random() * range) + min;
}

console.log(getRandomInt(1, 6)); 
console.log(getRandomInt(0, 100));