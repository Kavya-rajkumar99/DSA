// 1234    --> space=>i-1
//  234
//   34
//    4

function printPattern(n) {
  let pattern = "";
  for (let i = 1; i <= n; i++) {
    let space = i - 1;
    let count = i;
    for (let j = 1; j <= space; j++) {
      pattern += " ";
    }
    for (let j = 1; j <= n - i + 1; j++) {
      pattern += count++;
    }
    pattern += "\n";
  }
  console.log(pattern);
}
printPattern(4);
