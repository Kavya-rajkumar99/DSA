function insertionSort(arr) {
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    let temp = arr[i];
    let j = i - 1;
    // for (; j >= 0; j--) {
    //   if (temp < arr[j]) {
    //     arr[j + 1] = arr[j];
    //   } else {
    //     break;
    //   }
    // }
    while (j >= 0 && temp < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
  }
  return arr;
}
//Best case complexity - O(n)
//Worst case complexity - O(n^2)
console.log(insertionSort([6, 7, 0, -1, -25, 3, 4, -2, 1, 18]));
