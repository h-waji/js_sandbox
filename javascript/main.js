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

const returnValue = hello('Hiro', 36);
console.log(returnValue);


