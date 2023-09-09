// 1
// 2 1
// 3 2 1
// 4 3 2 1

// function printPattern(n) { ------ Method 1
//   let pattern = "";
//   for (let i = 1; i <= n; i++) {
//     for (let j = i; j >= 1; j--) {
//       pattern += j + " ";
//     }
//     pattern += "\n";
//   }
//   console.log(pattern);
// }

//Method 2
function printPattern(n) {
  let pattern = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      pattern += i - j + 1 + " ";
    }
    pattern += "\n";
  }
  console.log(pattern);
}
printPattern(5);
