// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

// створити пустий масив, наповнити його 10 об'єктами new User(....)

let users = [];
users.push(new User(465876, 'alex', 'surname', 'email@com', 0501234567));
users.push(new User(4573, 'petya', 'surname', 'petya@com', 0501234561));
users.push(new User(11435636, 'vasya', 'surname', 'email@com', 0501234562));
users.push(new User(1346457, 'olya', 'surname', 'email@com', 0501234563));
users.push(new User(235267, 'oleg', 'surname', 'email@com', 0501234564));
users.push(new User(74537547, 'kostya', 'surname', 'email@com', 0501234565));
users.push(new User(124234, 'tanya', 'surname', 'email@com', 0501234566));
users.push(new User(486547247, 'elena', 'surname', 'email@com', 0501234560));
users.push(new User(2457694, 'maryna', 'surname', 'email@com', 0501234533));
users.push(new User(3574634587, 'denis', 'surname', 'email@com', 0501234555));

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let filteredArr = users.filter((value) => value.id % 2 === 0);
console.log('filteredArr:', filteredArr);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sortedArr = users.sort((a, b) => a.id - b.id);
console.log('sortedArr:', sortedArr);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

function Client(id, name, surname, email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}

// створити пустий масив, наповнити його 10 об'єктами Client

let clients = [];

clients.push(new Client(465876, 'alex', 'surname', 'email@com', 0501234567, ['potato','apples','milk','salt','sugar','butter',]));
clients.push(new Client(4573, 'petya', 'surname', 'petya@com', 0501234561, ['salt','sugar','butter',]));
clients.push(new Client(11435636, 'vasya', 'surname', 'email@com', 0501234562, ['milk','salt','sugar','butter',]));
clients.push(new Client(1346457, 'olya', 'surname', 'email@com', 0501234563, ['butter']));
clients.push(new Client(235267, 'oleg', 'surname', 'email@com', 0501234564, ['potato','apples',]));
clients.push(new Client(74537547, 'kostya', 'surname', 'email@com', 0501234565, ['apples','milk','salt',]));
clients.push(new Client(124234, 'tanya', 'surname', 'email@com', 0501234566, ['salt','sugar',]));
clients.push(new Client(486547247, 'elena', 'surname', 'email@com', 0501234560, ['potato','apples','milk','butter',]));
clients.push(new Client(2457694, 'maryna', 'surname', 'email@com', 0501234533, ['potato','apples','milk','salt','sugar','butter','meat',]));
clients.push(new Client(3574634587, 'denis', 'surname', 'email@com', 0501234555, ['potato','salt','sugar','butter','beer',]));

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log(clients.sort((a, b) => a.order.length - b.order.length));

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель,
//   виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, manufacturer, year, maxSpeed, engineVolume) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };
    this.info = function () {
        console.log(`model: ${this.model}`);
        console.log(`Manufacturer: ${this.manufacturer}`);
        console.log(`Year: ${this.year}`);
        console.log(`Max speed: ${this.maxSpeed}`);
        console.log(`Engine Volume: ${this.engineVolume}`);
    };
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed;
    };
    this.changeYear = function (newValue) {
        this.year = newValue;
    };
    this.addDriver = function (driver) {
        this.driver = driver;
    };
}

let lanos = new Car('Lanos', 'Daewoo', 2000, 120, 1.2);
lanos.drive();
lanos.info();
lanos.increaseMaxSpeed(30);
lanos.changeYear(2022);
lanos.addDriver({ name: 'oleg', age: 35 });

console.log(lanos);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class CarClass {
    constructor(model, manufacturer, year, maxSpeed, engineVolume) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
        this.drive = function () {
            console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
        };
        this.info = function () {
            console.log(`model: ${this.model}`);
            console.log(`Manufacturer: ${this.manufacturer}`);
            console.log(`Year: ${this.year}`);
            console.log(`Max speed: ${this.maxSpeed}`);
            console.log(`Engine Volume: ${this.engineVolume}`);
        };
        this.increaseMaxSpeed = function (newSpeed) {
            this.maxSpeed += newSpeed;
        };
        this.changeYear = function (newValue) {
            this.year = newValue;
        };
        this.addDriver = function (driver) {
            this.driver = driver;
        };
    }
}

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

function Cinderella(name, age, footSize) {
    this.name = name;
    this.age = age;
    this.footSize = footSize;
}

function Prince(name, age, findShoeSize) {
    this.name = name;
    this.age = age;
    this.findShoeSize = findShoeSize;
}

let cinderellas = [];

cinderellas.push(new Cinderella('Alena', 18, 31));
cinderellas.push(new Cinderella('Anna', 19, 32));
cinderellas.push(new Cinderella('Nastya', 20, 33));
cinderellas.push(new Cinderella('Olya', 21, 34));
cinderellas.push(new Cinderella('Alina', 22, 35));
cinderellas.push(new Cinderella('Ksenia', 23, 36));
cinderellas.push(new Cinderella('Tanya', 24, 37));
cinderellas.push(new Cinderella('Elena', 25, 38));
cinderellas.push(new Cinderella('Maryna', 26, 39));
cinderellas.push(new Cinderella('Sofia', 27, 40));

let prince = new Prince('Oleg', 25, 38);

let foundCinderella = cinderellas.find(cinderella => cinderella.footSize === prince.findShoeSize);

console.log(`Prince ${prince.name} found his Cinderella and her name is ${foundCinderella.name} and her age is ${foundCinderella.age} and her foot size is ${foundCinderella.footSize}`)