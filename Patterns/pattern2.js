// 4 3 2 1  row -> 1 to n
// 4 3 2 1  col -> n-j+1
// 4 3 2 1
// 4 3 2 1

function printPattern(n) {
  let pattern = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      pattern += n - j + 1 + " ";
    }
    pattern += "\n";
  }
  console.log(pattern);
}
printPattern(4);
