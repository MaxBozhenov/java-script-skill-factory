let x = NaN;
let type = typeof(x);
console.log(type);

if (type == 'number') {
    console.log("[x - число]")
} else if (type == 'string') {
    console.log("[х - строка]")
} else if (type == 'boolean') {
    console.log("[х - логический тип]")
} else {
    console.log("результат не определен")
}


const x = 7;
const y = 14;
