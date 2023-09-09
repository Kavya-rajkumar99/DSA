// A B C
// A B C
// A B C

function printPattern(n) {
  let pattern = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      pattern += String.fromCharCode(65 + j - 1) + " ";
    }
    pattern += "\n";
  }
  console.log(pattern);
}
printPattern(5);
