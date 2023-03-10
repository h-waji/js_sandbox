// 前のループの結果が accumulation に渡ってくる
const arry = [1, 2, 3, 4, 5];

arry.reduce((accu, curr) => {
  console.log(accu, curr);
  return accu + curr;
});

console.log("----------");

// ループ1回目で初期値を渡す場合、第二引数に初期値を設定
arry.reduce((accu, curr) => {
  console.log(accu, curr);
  return accu + curr;
}, 100);

console.log("----------");

const str = "animation";
const strArry = str.split("");
console.log(strArry);

const result = strArry.reduce((accu, curr) => {
  return `${accu}<${curr}>`;
}, "");

console.log(result);
