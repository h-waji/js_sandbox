const ex1 = false;

if (ex1) printExample1();

function printExample1() {
  console.log('1: Miku');

  setTimeout(() => {
    console.log('2: Rin');
  }, 1000);

  console.log('3: Len');
}

// ----- Promise -----
const ex2 = false;

if (ex2) printExample2();

function printExample2() {
  console.log('1: Miku');

  new Promise((resolve) => {
    setTimeout(() => {
      console.log('2: Rin');  
      // 処理完了を通知
      resolve();
    }, 1000);
  }).then(() => {
    console.log('3: Len');
  });
}

// PromiseStatus
//   - pending: 未解決
//   - resolved: 解決済み => then が実行
//   - rejected: 拒否 => catch が実行

const ex3 = false;

if (ex3) printExample3();

function printExample3() {
  const promise = new Promise((resolve) => {
    resolve("Hello Promise");
  }).then((val) => {
    console.log(val);
  });

  const promise2 = new Promise((resolve, reject) => {
    reject();
  })
  .then(() => {
    console.log("resolve");
  })
  .catch(() => {
    console.log("reject!!");
  });

  const promise3 = new Promise((resolve, reject) => {
    reject("test");
  })
  .then((val) => {
    console.log(`then1: ${val}`);
    return val;
  })
  .catch((val) => {
    console.log(`catch: ${val}`);
    return val;
  })
  .then((val) => {
    console.log(`then2: ${val}`);
  });
}

// ----- Promise.all -----
const ex4 = false;

if (ex4) printExample4();

function printExample4() {
  const promise1 = new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 3000);
  }).then(() => {
    console.log("promise1 completed");
  });

  const promise2 = new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  }).then(() => {
    console.log("promise2 completed");
  });

  Promise.all([promise1, promise2]).then(() => {
    console.log("All completed");
  });
}

// ----- Promise.race -----
const ex5 = true;

if (ex5) printExample5();

function printExample5() {
  const promise1 = new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 3000);
  }).then(() => {
    console.log("promise1 completed");
  });

  const promise2 = new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 4500);
  }).then(() => {
    console.log("promise2 completed");
  });

  Promise.race([promise1, promise2]).then(() => {
    console.log("Any one of these has been completed.");
  });
}
