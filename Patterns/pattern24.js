//    1   --> space => n-i => first triangle => second triangle
//   121
//  12321
// 1234321

function printPattern(n) {
  let pattern = "";
  for (let i = 1; i <= n; i++) {
    let space = n - i;
    for (let j = 1; j <= space; j++) {
      pattern += " ";
    }
    for (let j = 1; j <= i; j++) {
      pattern += j;
    }
    let k = i;
    for (let n = 1; n <= i - 1; n++) {
      pattern += --k;
    }
    pattern += "\n";
  }
  console.log(pattern);
}
printPattern(4);
