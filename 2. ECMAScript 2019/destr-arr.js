// Array destructuring

const fib =  [1, 1, 2, 3, 5, 8, 13];

// Извлекаем первые три элемента
const [a, b, c] = fib;
console.log(a, b, c);

//извлекаем второй и четвертый элемент
const [, a1, , b1] = fib;
console.log(a1, b1);

//многомерный массив
const line = [[10, 17], [14, 7]];

const [ [p1x, p1y], [p2x, p2y] ] = line;
console.log(p1x, p1y, p2x, p2y);

// с значением по умолчанию
const people = ['chris', 'sandra'];

const [a2, b2, c2 = 'guest'] = people;
console.log(a2, b2, c2);

// с rest elements
const people1 = ['chris', 'sandra', 'bob'];

const [a3, b3, ...others] = people1;
console.log(a3, b3, others);

//пример с функцией
const dict = {
    duck: 'quack',
    dog: 'wuff',
    mouse: 'squeak',
    hamster: 'squeak',
};

// Показывает массив полностью
const res = Object.entries(dict);
console.log(res);

// фильтруем массив по второму значению массива
const res1 = Object.entries(dict)
    .filter((arr) => arr[1] === 'squeak');
console.log(res1);

// фильтруем массив по значению
const res2 = Object.entries(dict).filter(([key, value]) => value === 'squeak');
console.log(res2);

// фильтруем массив по значению без ключа (пропускаем)
const res3 = Object.entries(dict)
    .filter(([, value]) => value === 'squeak');
console.log(res3);

// фильруем массив по значению и выводим только ключи
const res4 = Object.entries(dict)
    .filter(([, value]) => value === 'squeak')
    .map(([key, value]) => key);
console.log(res4);

//Комбинация деструктуризация для массиов и объектов
const shape = {
    type: 'segment',
    coordinates: {
        start: [10, 15],
        end: [17, 15]
    }
};

const { coordinates: { start: [startX, startY], end: [endX, endY] } } = shape;
console.log(startX, startY, endX, endY);
