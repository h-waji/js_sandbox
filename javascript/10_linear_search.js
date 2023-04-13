// 線形探索
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }

  return -1;
}

const arr = [3, 1, 4, 1, 3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const target = 5;
const index = linearSearch(arr, target);

console.log(index);
