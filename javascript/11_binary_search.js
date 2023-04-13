// 二分探索
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    }
    else if (arr[mid] < target) {
      left = mid + 1;
      console.log("left: " + left);
    }
    else {
      right = mid - 1;
      console.log("right: " + right);
    }
  }

  return -1;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(binarySearch(arr, 4));
console.log(binarySearch(arr, 10));
