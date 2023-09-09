// A
// B B
// C C C

function printPattern(n) {
  let pattern = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      pattern += String.fromCharCode(65 + i - 1) + " ";
    }
    pattern += "\n";
  }
  console.log(pattern);
}
printPattern(5);
