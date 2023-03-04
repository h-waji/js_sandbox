const hello = 'Hello World!';
console.log(hello);

// ----- let -----
let one = 1;
let two = "2";
console.log(typeof one);
console.log(typeof two);

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

// ----- 配列 -----
const array = [1, 2, 3, 'hello', false];
console.log(array[0]);
console.log(array);

array.push('push_item');
console.log(array);

array.unshift('unshift_tem');
console.log(array);

array.pop();
console.log(array);

array.shift();
console.log(array);








