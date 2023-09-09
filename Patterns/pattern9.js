// A A A  65 + 0 (i-1)
// B B B  65 + 1 (i-1)
// C C C  65 + 2 (i-1)

function printPattern(n) {
  let pattern = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      pattern += String.fromCharCode(65 + i - 1) + " ";
    }
    pattern += "\n";
  }
  console.log(pattern);
}
printPattern(5);
