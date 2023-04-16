async function resolve() {
  return 'Resolve'
}

console.log(resolve());

resolve().then(v => {
  console.log(v);
});

async function reject() {
  throw new Error('Reject');
}

// console.log(reject());

reject().catch((e) => {
  console.log(e);
});

// ----- async / await -----
// 2秒後に15を返す
function sampleResolve(value) {
  return new Promise(resolve => {
      setTimeout(() => {
          resolve(value * 2);
      }, 2000);
  })
}

async function sample() {
  const result = await sampleResolve(5);
  return result + 5;
}

sample().then(result => {
  console.log('sample:', result);
});

// ----- 連続した非同期処理 -----
function sampleResolve2(value) {
  return new Promise(resolve => {
      setTimeout(() => {
          resolve(value);
      }, 2000);
  })
}

async function sample2() {
  return await sampleResolve2(5) * await sampleResolve2(10) + await sampleResolve2(20);
}

sample2().then((v) => {
  console.log('sample2', v);
});

// -----
async function sample2b() {
  const a = await sampleResolve2(5);
  const b = await sampleResolve2(10);
  const c = await sampleResolve2(20);
  return a * b + c;
}

sample2b().then((v) => {
  console.log('sample2b:', v);
});

// ----- 繰り返しの非同期処理 -----
function sampleResolve3(value) {
  return new Promise(resolve => {
      setTimeout(() => {
          resolve(value);
      }, 1000);
  })
}

async function sample3() {
  for (let i = 0; i < 5; i += 1) {
      const result = await sampleResolve3(i);
      console.log('sample3:', result);
  }

  return 'Completed'
}

sample3().then((v) => {
  console.log('sample3:',v);
});

// ----- reduce -----
function sampleResolve4(value) {
  return new Promise(resolve => {
      setTimeout(() => {
          resolve(value);
      }, 1000);
  })
}

async function sample4() {
  const array = [5, 10, 20];
  const sum = await array.reduce(async (sum, value) => {
    return await sum + await sampleResolve4(value) * 2;
  }, 0);

  return sum;
}

sample4().then((v) => {
  console.log('sample4:', v);
});

// ----- 並列の非同期処理 -----
function sampleResolve5(value) {
  return new Promise(resolve => {
      setTimeout(() => {
          resolve(value);
          console.log('sampleResolve5 resolve', value);
      }, 2000);
  })
}

function sampleResolve5b(value) {
  return new Promise(resolve => {
      setTimeout(() => {
          resolve(value * 2);
          console.log('sampleResolve5b resolve', value);
      }, 1000);
  })
}

async function sample5() {
  const [a, b] = await Promise.all([sampleResolve5(5), sampleResolve5(10)]);
  const c = await sampleResolve5b(b);
  
  return [a, b, c];
}

sample5().then(([a, b, c]) => {
  console.log('sample5:', a, b, c);
});
