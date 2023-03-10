const arry = [1, 2, 3, 4, 5];

function forEach(ary, callback) {
  for (let i = 0; i < ary.length; i++) {
    callback(ary[i]);
  }
}

function log(val) {
  console.log(val);
}

function double(val) {
  val *= 2;
  log(val);
}

console.log('----- forEach(arry, log); -----');
forEach(arry, log);

console.log('----- forEach(arry, double); -----');
forEach(arry, double);

console.log('----------');
forEach(arry, function(val) {
  val *= 2;
  log(val);
});
