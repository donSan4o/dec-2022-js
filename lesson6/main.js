// - Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'

console.log(
    'hello world'.length,
    'lorem ipsum'.length,
    'javascript is cool'.length
);

// - Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'

console.log(
    'hello world'.toUpperCase(),
    'lorem ipsum'.toUpperCase(),
    'javascript is cool'.toUpperCase()
);

// - Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

console.log(
    'HELLO WORLD'.toLowerCase(),
    'LOREM IPSUM'.toLowerCase(),
    'JAVASCRIPT IS COOL'.toLowerCase()
);

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = ' dirty string   ';
console.log(str.trim());

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.

let strToArr = 'Ревуть воли як ясла повні';

stringToarray = (str) => console.log(str.split(' '));

stringToarray(strToArr);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let arrNumbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];

let numberToString = arrNumbers.map((value) => value.toString());
console.log(numberToString);

// - створити функцію sortNums(direction), яка прймає масив чисел,
// та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.

let nums = [11, 21, 3, 5, 23, 1, 6, 7];
let sortNums = (arr, direction) => {
    arr.sort((a, b) => {
        if (direction === 'ascending') {
            return a - b;
        }
        if (direction === 'descending') {
            return b - a;
        }
    });
    return console.log(arr);
};

sortNums(nums, 'ascending');
sortNums(nums, 'descending');

// ==========================
// - є масив
let coursesAndDurationArray = [
    { title: 'JavaScript Complex', monthDuration: 5 },
    { title: 'Java Complex', monthDuration: 6 },
    { title: 'Python Complex', monthDuration: 6 },
    { title: 'QA Complex', monthDuration: 4 },
    { title: 'FullStack', monthDuration: 7 },
    { title: 'Frontend', monthDuration: 4 },
];

// //  -- відсортувати його за спаданням за monthDuration

let coursesSort = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
console.log(coursesSort);

// //  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let filterCourses = coursesAndDurationArray.filter(course => course.monthDuration > 5);
console.log(filterCourses);

// //  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let coursesAndDurationArrayId = coursesAndDurationArray.map((value, index) => {
    return {
        id: index + 1,
        title: value.title,
        monthDuration: value.monthDuration,
    };
});
console.log(coursesAndDurationArrayId);

//  =========================
//  описати колоду карт (від 6 до туза без джокерів)

// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

// =========================
let cards = [
    { cardSuit: 'spade', value: '6', color: 'black' },
    { cardSuit: 'heart', value: '6', color: 'red' },
    { cardSuit: 'diamonds', value: '6', color: 'red' },
    { cardSuit: 'club', value: '6', color: 'black' },

    { cardSuit: 'spade', value: '7', color: 'black' },
    { cardSuit: 'heart', value: '7', color: 'red' },
    { cardSuit: 'diamonds', value: '7', color: 'red' },
    { cardSuit: 'club', value: '7', color: 'black' },

    { cardSuit: 'spade', value: '8', color: 'black' },
    { cardSuit: 'heart', value: '8', color: 'red' },
    { cardSuit: 'diamonds', value: '8', color: 'red' },
    { cardSuit: 'club', value: '8', color: 'black' },

    { cardSuit: 'spade', value: '9', color: 'black' },
    { cardSuit: 'heart', value: '9', color: 'red' },
    { cardSuit: 'diamonds', value: '9', color: 'red' },
    { cardSuit: 'club', value: '9', color: 'black' },

    { cardSuit: 'spade', value: '10', color: 'black' },
    { cardSuit: 'heart', value: '10', color: 'red' },
    { cardSuit: 'diamonds', value: '10', color: 'red' },
    { cardSuit: 'club', value: '10', color: 'black' },

    { cardSuit: 'spade', value: 'jack', color: 'black' },
    { cardSuit: 'heart', value: 'jack', color: 'red' },
    { cardSuit: 'diamonds', value: 'jack', color: 'red' },
    { cardSuit: 'club', value: 'jack', color: 'black' },

    { cardSuit: 'spade', value: 'queen', color: 'black' },
    { cardSuit: 'heart', value: 'queen', color: 'red' },
    { cardSuit: 'diamonds', value: 'queen', color: 'red' },
    { cardSuit: 'club', value: 'queen', color: 'black' },

    { cardSuit: 'spade', value: 'king', color: 'black' },
    { cardSuit: 'heart', value: 'king', color: 'red' },
    { cardSuit: 'diamonds', value: 'king', color: 'red' },
    { cardSuit: 'club', value: 'king', color: 'black' },

    { cardSuit: 'spade', value: 'ace', color: 'black' },
    { cardSuit: 'heart', value: 'ace', color: 'red' },
    { cardSuit: 'diamonds', value: 'ace', color: 'red' },
    { cardSuit: 'club', value: 'ace', color: 'black' },
];

//  - знайти піковий туз
let aceSpade = cards.find(element => element.value === 'ace' && element.cardSuit === 'spade');
console.log(aceSpade);

//  - всі шістки
let sixes = cards.filter(element => element.value === '6');
console.log(sixes);

//  - всі червоні карти
let redCards = cards.filter(element => element.color === 'red');
console.log(redCards);

//  - всі буби
let diamondsCards = cards.filter(element => element.cardSuit === 'diamonds');
console.log(diamondsCards);

//  - всі трефи від 9 та більше
let clubsOverNine = cards.filter(element => element.cardSuit === 'club' && (element.value > '8' || element.value === '10'));
console.log(clubsOverNine);


// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
let sortCards = cards.reduce(
    (accumulator, currentCard) => {
        if (currentCard.cardSuit === 'spade') {
            accumulator.spades.push(currentCard);
        }
        if (currentCard.cardSuit === 'diamonds') {
            accumulator.diamonds.push(currentCard);
        }
        if (currentCard.cardSuit === 'heart') {
            accumulator.hearts.push(currentCard);
        }
        if (currentCard.cardSuit === 'club') {
            accumulator.clubs.push(currentCard);
        }
        return accumulator;
    },
    {
        spades: [],
        diamonds: [],
        hearts: [],
        clubs: [],
    }
);
console.log('sortcards:', sortCards)

// =========================
// взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: [
            'html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
        ],
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: [
            'html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced',
        ],
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: [
            'html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced',
        ],
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC'],
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: [
            'html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java',
        ],
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: [
            'html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'sass',
        ],
    },
];

// --написати пошук всіх об'єктів, в який в modules є sass
let sassElements = coursesArray.filter(value => value.modules.find((value) => value === 'sass'));
console.log('sassElements:', sassElements);

// --написати пошук всіх об'єктів, в який в modules є docker
let dockerElements = coursesArray.filter(value => value.modules.find((value) => value === 'docker'));
console.log('dockerElements:', dockerElements);
