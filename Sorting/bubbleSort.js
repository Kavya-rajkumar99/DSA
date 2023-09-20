function selectionSort(arr) {
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    let swapped = false;
    for (let j = 0; j < n - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
  return arr;
}
//Best case complexity - O(n)
//Worst case complexity - O(n^2)
console.log(selectionSort([6, 7, 0, -1, -25, 3, 4, 2, 1, 18]));
