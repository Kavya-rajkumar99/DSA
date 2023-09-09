// 1
// 2 3
// 3 4 5
// 4 5 6 7

function printPattern(n) {
  let pattern = "";
  for (let i = 1; i <= n; i++) {
    let count = i;
    for (let j = 1; j <= i; j++) {
      pattern += count++ + " ";
    }
    pattern += "\n";
  }
  console.log(pattern);
}

printPattern(5);
