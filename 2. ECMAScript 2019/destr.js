// Destructuring - Деструктизация

const person = {
    firstName: 'Peter',
    lastName: 'Smith',
    age: 27
};

// Старый способ
const firstName1 = person.firstName;
const lastName1 = person.lastName;
console.log(firstName1, lastName1);

// Деструтуризация
const { firstName, lastName } = person;
console.log(firstName, lastName);


// Деструктуризация всложенного объекта
const person1 = {
    name: {
        first: 'Peter',
        last: 'Smith'
    },
    age: 27
};

const { name: { first, last} } = person1;
console.log(first, last);

// Деструктуризация всложенного объекта с переименованием полей
const { name: { first: firstName2, last: lastName2} } = person1;
console.log(firstName2, lastName2);

// Деструктуризация с возможностью указать значение поумолчанию
const person2 = {
    name: {
        first: 'Peter',
        last: 'Smith'
    },
    age: 27,
    role1: 'admin'
};

const { role = 'user', role1: role2 = 'user' } = person2;
console.log(role, role2);

// Деструктуризация с возможностью указать значение поумолчанию, для вложенного и родительского объекта
const person3 = {
    name: {
        first: 'Peter',
        last: 'Smith'
    },
    age: 27,
};

const { permissions: { role1 = 'user' } = {} } = person3;
console.log(role1);

// Пример с функцией
function connect({
    host = 'localhost',
    port = 12345,
    user = 'guest'
} =  {}) {
    console.log(user, port, host);
};

connect({});

connect({
    host: 'localhost',
    port: 1829,
    user: 'perer'
});

connect();

// Rest elements

const dict = {
    duck: 'quack',
    dog: 'wuff',
    mouse: 'squeak',
};

const { duck, mouse, ...other } = dict;
console.log(duck, mouse, other);