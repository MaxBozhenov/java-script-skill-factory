function getForAsInterval(a, b) {
  let c = a;

  const intervalId = setInterval(() => {
    if (c <= b) console.log(c++);
    else clearInterval(intervalId);
  }, 1000);
}

getForAsInterval(5, 15);
