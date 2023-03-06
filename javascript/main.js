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
const arry = [1, 2, 3, 'hello', false];
console.log(arry[0]);
console.log(arry);

arry.push('push_item');
console.log(arry);

arry.unshift('unshift_tem');
console.log(arry);

arry.pop();
console.log(arry);

arry.shift();
console.log(arry);

// ----- オブジェクト -----
const pumpkin = {};
pumpkin.name = 'PumpKing';
pumpkin.age = 16;
console.log(pumpkin);
console.log(pumpkin.name);
console.log(pumpkin.age);

const skeleton = {
  name: ['Ske', 'Leton'],
  age: 18,
  gender: 'male',
  interests: {
    sports: 'soccer',
    music: 'piano'
  },
  // メソッド
  getFullName: function() {
    console.log(this.name[0] + ' ' + this.name[1]);
  }
};

console.log(skeleton);
console.log(skeleton.name[0]);
console.log(skeleton.interests.music);
skeleton.getFullName();

// Keyを動的に変更する場合は [] を使う
const ageKey = 'age';
skeleton[ageKey] = 80;
console.log(skeleton.age);

// ----- for -----
console.log('----- for -----');

const numbers = [1, 2, 3, 4, 5];

for(let i = 0; i < numbers.length; i++){
  console.log(numbers[i]);
}

// ----- for in -----
console.log('----- for in -----');

for(let i in numbers){
  console.log(i);
}

// ----- for of -----
console.log('----- for of -----');

for(let v of numbers){
  console.log(v);
}

// ----- object, for -----
console.log('----- object, for -----');

const todos = [
  {
    id: 1,
    title: 'Ruby on Rails',
    completed: true
  },
  {
    id: 2,
    title: 'Django',
    completed: true
  },
  {
    id: 3,
    title: 'Build a production environment on AWS',
    completed: false
  }
];

for(let i = 0; i < todos.length; i++){
  let todo = todos[i];
  if (todo.completed) console.log(i, todo.title);
}

for(let i in todos){
  let todo = todos[i];
  if (todo.completed) console.log(i, todo.title);
}

for(let todo of todos) {
  if (todo.completed) console.log(todo.title);
}

// ----- ifと比較演算子 -----
console.log('----- ifと比較演算子 -----');

if(1 === '1') {
  console.log('this is true.')
} else {
  console.log('this is false.')
}

const num = 0; // null, undefinedもfalse
const bool = Boolean(num);
console.log(bool);

if(num) {
  console.log('this is true.')
} else {
  console.log('this is false.')
}

// ----- Arrow function -----
console.log('----- Arrow function -----');

const ohayo = (oha_name='OhaTaro') => console.log('Ohayo! My name is ' + oha_name);
ohayo();
ohayo('Mario');

// 引数1, 初期値不要だと ()省略OK
const ohayo2 = oha_name2 => console.log('Ohayo! My name is ' + oha_name2);
ohayo2('Wario');

const ohayo3 = (oha_name3, age) => { return oha_name3 + ', ' + age; }
console.log(ohayo3('Yoshi', 15));
// return の省略
const ohayo4 = (oha_name4, age) => oha_name4 + ', ' + age;
console.log(ohayo4('Yoshi', 15));

numbers.forEach(function(v) {
  console.log(v);
})
// 省略
numbers.forEach(v => console.log(v));




