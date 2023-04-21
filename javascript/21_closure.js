function outerFunction() {
  const outerVariable = 'Hop';

  function innerFunction() {
    const innerVariable = 'Step';

    function deep() {
      const deepVariable = 'Jump';
      console.log(outerVariable, innerVariable, deepVariable);
    }

    deep();
  }

  return innerFunction;
}

const closure = outerFunction();
closure();
