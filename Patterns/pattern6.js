// 1
// 2 3
// 4 5 6
// 7 8 9 10

function printPattern(n) {
  let count = 1;
  let pattern = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      pattern += count++ + " ";
    }
    pattern += "\n";
  }
  console.log(pattern);
}

printPattern(5);
