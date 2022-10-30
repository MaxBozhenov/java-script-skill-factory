let cars = new Map();
cars.set('bmw', 'black');
cars.set('mecedes', 'white');
cars.set('audi', 777);

// for (let elem of cars.keys()) {
//     console.log('ключ -',elem);
// }
// for (let proop of cars.values()) {
//     console.log('свойство -',proop);
// }

for (let entry of cars) {
    console.log(`Ключ - ${entry[0]}, значение - ${entry[1]}`);
}
