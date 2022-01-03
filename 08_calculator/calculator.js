function add(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numArray) {
	return numArray.reduce(((sumResult, num) => sumResult += num), 0);
};

const multiply = function(numArray) {
  return numArray.reduce(((multiplyResult, num) => multiplyResult *= num), 1);
};

const power = function(num, toPower) {
  let result = 1;
	for (let i = 0; i < toPower; i++) {
    result *= num;
  }
  return result;
};

const factorial = function(num) {
	let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
