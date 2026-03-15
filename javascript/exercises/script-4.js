console.log(5 + "10");
console.log("5" + 10);
console.log("5" + "10");
        
console.log(5 - "10");
console.log("5" * 10);
console.log("5" / "10");

function demonstrateCoercion(value1, value2) {
    console.log(`Addition: ${value1} + ${value2} = ${value1 + value2}`);
    console.log(`Subtraction: ${value1} - ${value2} = ${value1 - value2}`);
    console.log(`Multiplication: ${value1} * ${value2} = ${value1 * value2}`);
    console.log(`Division ${value1} / ${value2} = ${value1 / value2}`);
}
    
demonstrateCoercion(5, "10");
demonstrateCoercion("5", 10);

function compareValues(value1, value2) {
console.log(`Testing: ${value1} vs ${value2}`);
console.log(`Loose equality (==): ${value1 == value2}`);
console.log(`Strict equality (===): ${value1 === value2}`);
console.log('---');
}

compareValues(5, "5");
compareValues(0, false);
compareValues("", false);
compareValues(null, undefined);

let userName;
console.log(userName);
        
function addTwoNums(num1, num2) {
    let sum = num1 + num2;
}

console.log(addTwoNums(12, 8));

console.log("hello" / 2);
console.log(Number("hello"));
console.log(0 / 0);

function checkTruthiness(value) {
    if (value) {
        console.log(`"${value}" is truthy`);
    } else {
        console.log(`"${value}" is falsy`);
    }
}

checkTruthiness(false);
checkTruthiness(0);
checkTruthiness("");
checkTruthiness(undefined);
checkTruthiness(null);
checkTruthiness(NaN);

console.log(typeof NaN);