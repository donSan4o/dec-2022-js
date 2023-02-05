// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr = ['a', 'b', 'c', 'd', 43, '22', 100500, true, false, [1, 2, 3]];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1 = {
    title: 'book1',
    pageCount: 20,
    genre: 'romance',
};
let book2 = {
    title: 'book2',
    pageCount: 12,
    genre: 'historic',
};
let book3 = {
    title: 'book3',
    pageCount: 44,
    genre: 'comics',
};

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let book4 = {
    title: 'book3',
    pageCount: 44,
    genre: 'comics',
    autors: [
        {
            name: 'name1',
            age: 22,
        },
    ],
};
let book5 = {
    title: 'book3',
    pageCount: 44,
    genre: 'comics',
    autors: [
        {
            name: 'name2',
            age: 42,
        },
    ],
};
let book6 = {
    title: 'book3',
    pageCount: 44,
    genre: 'comics',
    autors: [
        {
            name: 'name2',
            age: 32,
        },
    ],
};

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
    {
        name: 'name1',
        userName: 'userName1',
        password: 111,
    },
    {
        name: 'name2',
        userName: 'userName2',
        password: 222,
    },
    {
        name: 'name3',
        userName: 'userName3',
        password: 333,
    },
    {
        name: 'name4',
        userName: 'userName4',
        password: 444,
    },
    {
        name: 'name5',
        userName: 'userName5',
        password: 555,
    },
    {
        name: 'name6',
        userName: 'userName6',
        password: 666,
    },
    {
        name: 'name7',
        userName: 'userName7',
        password: 777,
    },
    {
        name: 'name8',
        userName: 'userName8',
        password: 888,
    },
    {
        name: 'name9',
        userName: 'userName9',
        password: 999,
    },
    {
        name: 'name10',
        userName: 'userName10',
        password: 1000,
    },
];

console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);

// Логічні розгалуження:
// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = 0;

if (x != 0) {
    console.log('True');
} else {
    console.log('False');
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 0;
if (time >= 0 && time <= 15) {
    console.log('First Quarter');
} else if (time > 15 && time < 30) {
    console.log('Second Quarter');
} else if (time >= 30 && time < 45) {
    console.log('Third Quarter');
} else if (time >= 45 && time <= 59) {
    console.log('Fourth Quarter');
} else {
    console.log('Please set number from 0 to 59');
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 0;
let isFirstDecade = day > 0 && day <= 10;
let isSecondDecade = day > 10 && day < 20;
let isThirdDecade = day >= 20 && day <= 31;

if (isFirstDecade) {
    console.log('First Decade');
} else if (isSecondDecade) {
    console.log('Second Decade');
} else if (isThirdDecade) {
    console.log('Third Decade');
} else {
    console.log('Please set number from 1 to 31');
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let dayOfWeekNumber = 2;
switch (dayOfWeekNumber) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Thuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;

    default:
        console.log('Please set number from 1 to 7');
        break;
}

// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.

let a = +prompt('Enter the first number');
let b = +prompt('Enter the second number');

if (b > a) {
    console.log('Biggest number is ' + b + ' , because ' + b + ' biggest than ' + a);
} else if (a > b) {
    console.log('Biggest number is ' + a + ' , because ' + a + ' biggest than ' + b);
} else if (a === b) {
    console.log('no biggest number in this case');
}

// - є змінна y, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// за допомоги  оператора || буде присвоювати змінній y значення "default"  якщо значення змінної y являється falsy (хибноподібні, тобто приводиться до false)

let y;

y = y || 'default';

console.log(y);

// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    { title: 'JavaScript Complex', monthDuration: 5 },
    { title: 'Java Complex', monthDuration: 6 },
    { title: 'Python Complex', monthDuration: 6 },
    { title: 'QA Complex', monthDuration: 4 },
    { title: 'FullStack', monthDuration: 7 },
    { title: 'Frontend', monthDuration: 4 },
];

if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('Супер');
}

if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('Супер');
}

if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('Супер');
}

if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('Супер');
}

if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('Супер');
}

if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('Супер');
}
