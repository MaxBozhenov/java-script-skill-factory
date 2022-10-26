const arr = ['a', 'a', 'n'];
let isEqual = null;

for (let i = 0; i < arr.length; i++) {
    const fisrtSymbol = arr[0];
    const currSymbol = arr[i]

    if (fisrtSymbol !== currSymbol) {
        isEqual = false;
        break;
    } else {
        isEqual = true;
    }
}

console.log(isEqual);