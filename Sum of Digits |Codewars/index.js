function digitalRoot(n) {
  let result = Array.from(n.toString(), Number).reduce((a, b) => a + b);
  while (result.toString().length > 1) {
    return digitalRoot(result);
  }
  return result;
}

console.log(digitalRoot(16));
console.log(digitalRoot(456));
console.log(digitalRoot(138745));
