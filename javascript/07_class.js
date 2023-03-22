class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  info() {
    console.log(this.name, this.age);
  }
}

const mvp = new Person("Ohtani", 28);
mvp.info();


class Pitcher extends Person {
  constructor(name, age, max) {
    super(name, age);
    this.max = max;
  }

  info() {
    console.log(this.name, this.age, this.max);
  }
}

const pitcher = new Pitcher("Shohei Ohtani", 28, 165);
pitcher.info();
