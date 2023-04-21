// function.apply(thisArg, [argsArray])

function greet(greeting) {
  console.log(greeting, this.name);
}

var person = {
  name: 'Obama'
};

greet.apply(person, ['Yes we can!', 'we hope', 'we believe']);

// ----- sample2 -----
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

const numbers = [4, 21];
const sum = add.apply(null, numbers);
console.log(sum);

const difference = subtract.apply(null, numbers);
console.log(difference);

// ----- sample3 -----
const person1 = {
  firstName: 'Ieyasu',
  lastName: 'Tokugawa',
  fullName: function() {
    return this.firstName + ' ' + this.lastName;
  }
};

const person2 = {
  firstName: 'Hidetada',
  lastName: 'Tokugawa',
};

const person3 = {
  firstName: 'Iemitsu',
  lastName: 'Tokugawa',
}

console.log(person1.fullName());

const fullName2 = person1.fullName.apply(person2);
console.log(fullName2);

const fullName3 = person1.fullName.apply(person3);
console.log(fullName3);
