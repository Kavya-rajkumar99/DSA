// 1 2 3 4
// 1 2 3 4
// 1 2 3 4
// 1 2 3 4

function printPattern(n) {
  let pattern = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      pattern += j + " ";
    }
    pattern += "\n";
  }
  console.log(pattern);
}
printPattern(4);
