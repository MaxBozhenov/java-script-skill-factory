const userInput = +prompt('Hello');

if (typeof(userInput) === 'number' && Boolean(userInput)) {
    if (userInput % 2 === 0) {
        alert("Четное");
    } else {
        alert("Нечетное");
    }
} else {
    alert("Упс, кажется, вы ошиблись");
}
