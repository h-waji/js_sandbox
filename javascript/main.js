console.log("hello world");

// ----- let -----
let number = 1;
let string = "2";
console.log(typeof number);
console.log(typeof string);

// ----- function -----
function hello(name, age) {
  console.log('Hello ' + name + ', age: ' + age);
  return name + age;
}

const returnHello = hello('Hiro', 36);
console.log(returnHello);

// ----- 無名関数 -----
const anonymous = function(name, age) {
  console.log('Anonymous function: [name: ' + name + ', age: ' + age + ']');
  return name + age;
}

const returnAnonymous = anonymous('Aki', '31');
console.log(returnAnonymous);




