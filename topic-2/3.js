function sum(a) {
  return function (b) {
    console.log(a + b);
  };
}

const sumToB = sum(4);

sumToB(10);
