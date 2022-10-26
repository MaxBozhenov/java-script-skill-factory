const arr = [8, 'sdzf', 0, 3, ' ', 0];
let x = 0; // Чётные
let y = 0; // Нечётные
let nulls = 0; // Нули

for (let i = 0; i < arr.length; i++) {
    const currSymbol = arr[i]
    console.log(currSymbol)
    
    if (typeof(currSymbol) !== "number") continue;

    if (currSymbol === 0) {
        nulls += 1;
        continue;
    }

    if (currSymbol % 2 === 0) {
        x += 1;
    } else {
        y += 1;
    }
}

console.log(`Чётные ${x} нечётные ${y} нули ${nulls}`);
