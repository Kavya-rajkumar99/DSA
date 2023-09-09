// *                    row -> 1 to n
// * *                  col -> 1 to row
// * * *
// * * * *
// * * * * *

function printPattern(n) {
  let pattern = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      pattern += "*";
    }
    pattern += "\n";
  }
  console.log(pattern);
}

printPattern(5);
