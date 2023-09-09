// 1 2 3 4      row -> 1 to n
// 5 6 7 8      col -> count++
// 9 10 11 12
// 13 14 15 16

function printPattern(n) {
  let pattern = "";
  let count = 1;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      pattern += count++ + " ";
    }
    pattern += "\n";
  }
  console.log(pattern);
}
printPattern(5);
