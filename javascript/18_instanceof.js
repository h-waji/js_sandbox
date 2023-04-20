class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Enemy {
  constructor(name) {
    this.name = name;
  }
}

const mario = new Person('Mario', 26);
console.log(mario instanceof Person);
console.log(mario instanceof Enemy);

function Product (id, name) {
  this.id = id;
  this.name = name;
}

const product = new Product(1, "Mint Tea");
console.log(product instanceof Product);
console.log(product instanceof Enemy);

class Student extends Person {
  constructor(name, age) {
    super(name, age);
  }
}

const wario = new Student('Wario', 30);
console.log(wario instanceof Person);
console.log(wario instanceof Student);
