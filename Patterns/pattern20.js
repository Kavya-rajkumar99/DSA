// 1111     --> space=>i-1
//  222
//   33
//    4

function printPattern(n) {
  let pattern = "";
  for (let i = 1; i <= n; i++) {
    let space = i - 1;
    for (let j = 1; j <= space; j++) {
      pattern += " ";
    }
    for (let j = 1; j <= n - i + 1; j++) {
      pattern += i;
    }
    pattern += "\n";
  }
  console.log(pattern);
}
printPattern(4);
