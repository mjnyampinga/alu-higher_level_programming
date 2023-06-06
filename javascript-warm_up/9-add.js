#!/usr/bin/node
function add(a, b) {
  return a + b;
}

if (process.argv.length !== 4) {
  console.log("Usage: node 9-add.js <integer1> <integer2>");
} else {
  const a = parseInt(process.argv[2]);
  const b = parseInt(process.argv[3]);

  if (isNaN(a) || isNaN(b)) {
    console.log("NaN");
  } else {
    const result = add(a, b);
    console.log(result);
  }
}
