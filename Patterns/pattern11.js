// A B C
// D E F
// G H I

function printPattern(n) {
  let pattern = "";
  let charCode = 65;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      pattern += String.fromCharCode(charCode++) + " ";
    }
    pattern += "\n";
  }
  console.log(pattern);
}
printPattern(3);
