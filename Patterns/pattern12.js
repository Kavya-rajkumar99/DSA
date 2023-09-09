// A B C
// B C D
// C D E

//Method 1
// function printPattern(n) {
//   let pattern = "";
//   for (let i = 1; i <= n; i++) {
//     let charCode = 65 + i - 1;
//     for (let j = 1; j <= n; j++) {
//       pattern += String.fromCharCode(charCode++) + " ";
//     }
//     pattern += "\n";
//   }
//   console.log(pattern);
// }
// printPattern(3);

//Method 2  i+j-1 = 1 ---map 1 to A, 2 to B, 3 to C etc
//i+j-1 = 1 => i+j-1+A-1 = 1+A-1 => A+i+j-2 = A ==> 65+i+j-2
function printPattern(n) {
  let pattern = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      pattern += String.fromCharCode(65 + i + j - 2) + " ";
    }
    pattern += "\n";
  }
  console.log(pattern);
}
printPattern(5);
