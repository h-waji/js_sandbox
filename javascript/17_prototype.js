let product = { id:1, name: 'Mint Tea' };
console.log(product.name);

console.log(product.price); // => undefined
// product.prototype.price = 300; => Error

// constructor function
function Product (id, name) {
  this.id = id;
  this.name = name;
}

Product.prototype.price = 300;

let product2 = new Product(2, "Mint tea");
console.log(product2)
console.log(product2.price);

Product.prototype.info = function () {
  console.log(`INFO: id: ${this.id}, name: ${this.name}, price: ${this.price}`)
}

product2.info();

Product.prototype.hoge = () => console.log('hoge');

product2.hoge();
