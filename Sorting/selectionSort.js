function selectionSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
}
//Best case complexity - O(n^2)
//Worst case complexity - O(n^2)
console.log(selectionSort([6, 7, 0, -1, -25, 3, 4, 2, 1, 18]));
