//    *   --> space => n-i star => i
//   **
//  ***
// ****

function printPattern(n) {
  let pattern = "";
  for (let i = 1; i <= n; i++) {
    let space = n - i;
    for (let j = 1; j <= space; j++) {
      pattern += " ";
    }
    for (let j = 1; j <= i; j++) {
      pattern += "*";
    }
    pattern += "\n";
  }
  console.log(pattern);
}
printPattern(4);
