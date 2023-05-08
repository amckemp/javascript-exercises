const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(array) {
	let total = 0;
  for (let i = 0; i < array.length; i++){
    total += array[i];
  }
  return total;
};

const multiply = function(array) {
  let product = 1;
  for (let i = 0; i < array.length; i++){
    product *= array[i];
  }
  return product;
};

const power = function(a,b) {
  let total = a;
	for (let i = 1; i < b; i++){
    total *= a;
  }
  return total;
};

const factorial = function(a) {
  if (a == 0){return 1;}
	let total = 1;
	for (let i = a; i > 0; i--){
    total *= i;
  }
  return total;
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
