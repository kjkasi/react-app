// Prototypes

const dog = {
    name: 'dog',
    voice: 'woof',
    say() {
        console.log(this.name, 'goes', this.voice);
    }
};

const cat = {
    name: 'cat',
    voice: 'meow',
    say() {
        console.log(this.name, 'goes', this.voice);
    }
};

dog.say();
cat.say();

// Создадим протатип с функцией (setPrototypeOf)

const animal = {
    say() {
        console.log(this.name, 'goes', this.voice);
    }
}

const dog1 = {
    name: 'dog1',
    voice: 'woof'
};
Object.setPrototypeOf(dog1, animal);

const cat1 = {
    name: 'cat1',
    voice: 'meow'
};
Object.setPrototypeOf(cat1, animal);

dog1.say();
cat1.say();

// Оказалось предыдущий способ плохой (create)
const animal1 = {
    say() {
        console.log(this.name, 'goes', this.voice);
    }
}

const dog2 = Object.create(animal1);
dog2.name = 'dog2';
dog2.voice = 'woof';

const cat2 = Object.create(animal1);
cat2.name = 'cat2';
cat2.voice = 'meow';

dog2.say();
cat2.say();

// Еще один способ, через функцию (create)
const animal2 = {
    say() {
        console.log(this.name, 'goes', this.voice); 
    }
}

function createAnimal(name, voice) {
    const result = Object.create(animal2);
    result.name = name;
    result.voice = voice;
    return result;
}

const dog3 = createAnimal('Dog3', 'woof');
const cat3 = createAnimal('Cat3', 'meow');

dog3.say();
cat3.say();

// Еще способ через new (new)

function Animal1(name, voice) {
    this.name = name;
    this.voice = voice;
}

Animal1.prototype.say = function() {
    console.log(this.name, 'goes', this.voice); 
}

const dog4 = new Animal1('Dog4', 'woof');
const cat4 = new Animal1('Cat4', 'meow');

dog4.say();
cat4.say();

// Создать объект без прототипа

const obj = Object.create(null);
console.log(obj.toString());