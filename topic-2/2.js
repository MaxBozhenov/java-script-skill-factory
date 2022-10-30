function getType(number) {
  if (number > 1000) {
    console.log("Данные введены некорректно");
  }

  for (let i = 2; i <= 1000; i++) {
    if (number % i === 0 && i === number) {
      return console.log("Простое число", number);
    }
    if (number % i === 0) {
      return console.log("Непростое число:", number);
    }
  }
}
