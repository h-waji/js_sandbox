let observers = [];

// Observerオブジェクトを登録する関数
function registerObserver(observer) {
  observers.push(observer);
}

// Observerオブジェクトを通知する関数
function notifyObservers() {
  for (let i = 0; i < observers.length; i++) {
    observers[i].notify();
  }
}

// Subjectオブジェクト
let subject = {
  state: 0,
  // 状態が変更されたときに呼び出される関数
  setState: function(state) {
    this.state = state;
    // Observerオブジェクトに通知する
    notifyObservers();
  }
};

// Observerオブジェクト
let observer1 = {
  notify: function() {
    console.log("Observer1: " + subject.state);
  }
};

let observer2 = {
  notify: function() {
    console.log("Observer2: " + subject.state);
  }
};

// Observerオブジェクトを登録
registerObserver(observer1);
registerObserver(observer2);

// Subjectオブジェクトの状態を変更
subject.setState(1);
subject.setState(2);
subject.setState(3);
