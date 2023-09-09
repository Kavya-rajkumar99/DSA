// 1                   row -> 1 to n
// 2 2                  col -> 1 to row
// 3 3 3
// 4 4 4 4

function printPattern(n) {
  let pattern = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      pattern += i + " ";
    }
    pattern += "\n";
  }
  console.log(pattern);
}

printPattern(5);
