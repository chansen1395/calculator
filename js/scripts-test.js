

function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

function toCelsius(farenheit) {
  var celsius = parseInt((farenheit - 32) * 5/9);
  return celsius;
}

const farenheit = parseInt(prompt("Enter a number:"));
//const number1 = parseInt(prompt("Enter a number:"));
// const number2 = parseInt(prompt("Enter another number:"));
const result = toCelsius(farenheit);
// const result = multiply(number1, number2);
alert(result);

