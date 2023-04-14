function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++ ) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  // console.log(quickSort(left).concat(pivot, quickSort(right)));
  return quickSort(left).concat(pivot, quickSort(right));
}

const arr = [3, 5, 1, 4, 2];
console.log(quickSort(arr));
