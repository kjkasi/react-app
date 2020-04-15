// Objects

const x = 10;
const y = 30;

const point = {
    x: x,
    y: y,

    draw: function() {
        //...
    }
};

const point1 = { x, y };

const point2 = {
    x, 
    y,
    draw(ctx){
        //...
    }
};

console.log(point, point1, point2);

// Динамические ключи
const prefix = '_blah_';

const data = {
    [prefix + 'name']: 'bob',
    [prefix + 'age']: 23
}

console.log(data);

// Функция копирования свойств между объектами

const defaults = {
    host: 'localhost',
    dbName: 'blog',
    user: 'admin',
};

const opts = {
    user: 'john',
    password: 'utopia'
};

const res = Object.assign({}, defaults, opts);

console.log(res);

// shallow копии объектов

const person = {
    name: 'Bob',
    friends: ['Mark', 'Jacob']
};

const shallowCopy = Object.assign({}, person);
// Добавляем к первому объекту, но он появляется и у второго
person.friends.push('Jane');

console.log(shallowCopy);