const arry = [1, 2, 3, 4, 5];

arry.forEach(function (v) {
  console.log(v);
});

console.log("----- arrow -----");

arry.forEach((v) => console.log(v));

console.log("----------");

// 1つめが値、2つ目が添え字、3つ目が配列
arry.forEach(function (v, i, ary) {
  console.log(v, i, ary);
});

console.log("----- arrow -----");

arry.forEach((v, i, ary) => console.log(v, i, ary));
