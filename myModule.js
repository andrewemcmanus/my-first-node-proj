// module.exports.beBasic = () => "That's so fetch!"
const beBasic = () => "That's so fetch!";

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num2 - num1;
}

function addAgain(num1, num2) {
  return num1 + num2;
}

module.exports = {
  beBasic,
  add,
  subtract,
  addAgain
};
