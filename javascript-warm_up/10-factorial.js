#!/usr/bin/node
function factorial(n) {
  if (isNaN(n)) {
    return 1;
  } else if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

if (process.argv.length !== 3) {
  console.log(result);
} else {
  const num = parseInt(process.argv[2]);
  const result = factorial(num);
  console.log(result);
}
