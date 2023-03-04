const hello = 'Hello World!';
console.log(hello);

// ----- let -----
let number = 1;
let string = "2";
console.log(typeof number);
console.log(typeof string);

// ----- function -----
function sayHello(name, age) {
  console.log('Hello ' + name + ', age: ' + age);
  return name + age;
}

const returnHello = sayHello('Hiro', 36);
console.log(returnHello);

// ----- 無名関数 -----
const anonymous = function(name, age) {
  console.log('Anonymous function: [name: ' + name + ', age: ' + age + ']');
  return name + age;
}

const returnAnonymous = anonymous('Aki', '31');
console.log(returnAnonymous);

// ----- property, method -----
console.log('hello.length: ' + hello.length);

console.log(hello.toUpperCase());
console.log(hello.substring(0, 5));
console.log(hello.slice(0, 5));
console.log(hello.split(' '));





