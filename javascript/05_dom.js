let element = document.querySelector("#main-title");
console.log(element);

element = document.getElementById("main-title"); // 古い書き方
console.log(element);

element = document.querySelector(".artcls");
console.log(element);

const h2 = document.querySelector("h2");
console.log(h2);
console.log(h2.textContent);

const ul = document.querySelector("ul");
ul.style.color = "red";

const firstLi = ul.querySelector("li");
firstLi.style.color = "black";

// ----- querySelectorAll -----
let items = document.querySelectorAll(".item");
console.log(items);

items = document.querySelectorAll("ul > li");
console.log(items);

const li = document.querySelectorAll("li");
li[1].style.color = "purple";

items = document.querySelectorAll(".item2");
items.forEach((node) => (node.style.color = "blue"));

// ----- innerHTML, textContent -----
const span = document.querySelector(".spncls");
span.style.color = "yellow";

console.log(h2.innerHTML);
console.log(h2.textContent);

h2.style.backgroundColor = "lightgreen";

// ----- classList -----
const h1 = document.querySelector("h1");
console.log(h1.classList);
h1.classList.add("u-line-green");
console.log(h1.classList);
h1.classList.remove("u-line-green");

h1.classList.toggle("u-line-green");
h1.classList.toggle("u-line-green");
h1.classList.toggle("u-line-green");

// ----- addEventListener -----
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => alert("Dokkaaan!"));

function changeColor() {
  h1.style.color = "red";
}

function changeBackground() {
  document.body.style.background = "orange";
}

btn.addEventListener("click", changeColor);
btn.addEventListener("click", changeBackground);

// btn.removeEventListener('click', changeBackground);
// btn.addEventListener('mouseenter', changeBackground);
