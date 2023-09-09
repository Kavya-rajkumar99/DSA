// A
// B C
// C D E
// D E F G

function printPattern(n) {
  let pattern = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      pattern += String.fromCharCode(65 + i + j - 2) + " ";
    }
    pattern += "\n";
  }
  console.log(pattern);
}
printPattern(5);
