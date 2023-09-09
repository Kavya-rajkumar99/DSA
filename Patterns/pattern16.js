// D   --> A+n-i
// C D
// B C D
// A B C D

function printPattern(n) {
  let pattern = "";
  for (let i = 1; i <= n; i++) {
    let charCode = 65 + n - i;
    for (let j = 1; j <= i; j++) {
      pattern += String.fromCharCode(charCode++) + " ";
    }
    pattern += "\n";
  }
  console.log(pattern);
}
printPattern(4);
