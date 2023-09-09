//    1   --> space => n-i numbers => i
//   23
//  456
// 78910

function printPattern(n) {
  let pattern = "";
  let count = 1;
  for (let i = 1; i <= n; i++) {
    let space = n - i;
    for (let j = 1; j <= space; j++) {
      pattern += " ";
    }
    for (let j = 1; j <= i; j++) {
      pattern += count++;
    }
    pattern += "\n";
  }
  console.log(pattern);
}
printPattern(4);
