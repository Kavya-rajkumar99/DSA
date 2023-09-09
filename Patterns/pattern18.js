// ****     --> stars -> n-i+1
// ***
// **
// *

function printPattern(n) {
  let pattern = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i + 1; j++) {
      pattern += "*";
    }
    pattern += "\n";
  }
  console.log(pattern);
}
printPattern(4);
