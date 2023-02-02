// How would you optimize this code to follow clean code principles
// and best practices in terms of naming conventions, readability, maintainability, and functionality?
function s(a, b) {
  var x = 0;
  // chang var to let
  for (var i = a; i <= b; i++) {
    x = x + i;
  }
  return x;
}

function calc(a, b, c) {
  const res = s(a, b);
  // changed const to let it work
  if (c == true) {
    res = res * 2;
  }
  return res;
}
//--------------------------------Clean Code ----------------------------------------
function sum(a, b) {
  let x = 0;
  for (let i = a; i <= b; i++) {
    x += i;
  }
  return x;
}

function calculator(a, b, c) {
  let result = sum(a, b);
  return !!c ? (result *= 2) : result;
}
