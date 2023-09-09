// 1234554321
// 1234**4321
// 123****321
// 12******21
// 1********1

function printPattern(n) {
  let pattern = "";
  for (let i = 1; i <= n; i++) {
    let stars = i - 1;
    for (let j = 1; j <= n - i + 1; j++) {
      pattern += j;
    }
    for (let j = 1; j <= stars; j++) {
      pattern += "*";
    }
    for (let m = 1; m <= stars; m++) {
      pattern += "*";
    }
    for (let m = n - i + 1; m >= 1; m--) {
      pattern += m;
    }
    pattern += "\n";
  }
  console.log(pattern);
}

printPattern(5);
