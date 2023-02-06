// 1. Створити пустий масив та :

let arr = [];

// a. заповнити його 50 парними числами за допомоги циклу.

for (let i = 0; i < 50; i++) {
    arr[i] = i * 2;
}
console.log(arr);

// b. заповнити його 50 непарними числами за допомоги циклу.

for (let i = 0; i < 50; i++) {
    arr[i] = i * 2 + 1;
}
console.log(arr);

// c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)

let randomArr = [];

for (let i = 0; i < 20; i++) {
    randomArr[i] = Math.random();
}
console.log(randomArr);

// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

let randomArrLimit = [];

for (let i = 0; i < 20; i++) {
    randomArrLimit[i] = Math.floor(Math.random() * 732) + 8;
}
console.log(randomArrLimit);

//  2. Вивести за допомогою console.log кожен третій елемен

let newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

for (let i = 0; i < newArr.length; i += 3) {
    console.log(newArr[i]);
}

//  3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

for (let i = 0; i <= newArr.length; i += 3) {
    newArr[i] % 2 == 0 ? console.log(newArr[i]) : '';
}

//  4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив

let newArrEven = [];

for (let i = 0; i <= newArr.length; i += 3) {
    newArr[i] % 2 == 0 ? (newArrEven[newArrEven.length] = newArr[i]) : '';
}
console.log(newArrEven);
console.log('');

//  5. Вивести кожен елемент масиву, сусід справа якого є парним
//   EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

let arrCheck = [4, 2, 3, 4, 5, 6, 7, 8, 9, 21, 32, 345, 341, 23, 43];

for (let i = 0; i < arrCheck.length; i++) {
    if (i !== arrCheck.length && arrCheck[i + 1] % 2 === 0) {
        console.log(arrCheck[i]);
    }
}

//  6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

let arrTotal = [100, 250, 50, 168, 120, 345, 188];
let total = 0;
for (let i = 0; i < arrTotal.length; i++) {
    total += arrTotal[i];
}
let totalAverage = Math.round(total / arrTotal.length);
console.log(totalAverage);

//  7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

let newRandomArr = [];
let newRandomCopyArr = [];
for (let i = 0; i < 10; i++) {
    newRandomArr[i] = Math.random();
    newRandomCopyArr[i] = newRandomArr[i] * 5;
}
console.log(newRandomArr);
console.log(newRandomCopyArr);

//  8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.

let mixArr = [1, 3, 4, 5, 6, true, 'text', false, 8, 'lorem', 32];
let newMixArr = [];

for (let i = 0; i < mixArr.length; i++) {
    typeof mixArr[i] === 'number' ? console.log((newMixArr[newMixArr.length] = mixArr[i])) : '';
}

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
let usersWithId = [
    { id: 1, name: 'vasya', age: 31, status: false },
    { id: 2, name: 'petya', age: 30, status: true },
    { id: 3, name: 'kolya', age: 29, status: true },
    { id: 4, name: 'olya', age: 28, status: false },
];

let citiesWithId = [
    { user_id: 3, country: 'USA', city: 'Portland' },
    { user_id: 1, country: 'Ukraine', city: 'Ternopil' },
    { user_id: 2, country: 'Poland', city: 'Krakow' },
    { user_id: 4, country: 'USA', city: 'Miami' },
];

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Example:
// let usersWithCities = [
//     {
//         id: 1, // <===
//         name: 'vasya',
//         age: 31,
//         status: false,
//         address: {
//             user_id: 1, // <===
//             country: 'Ukraine',
//             city: 'Ternopil'
//         }
//     },
//     // TO BE CONTINUED .....
// ]

let usersWithCities = [];

let i = 0;

for (let user of usersWithId) {
    for (let city of citiesWithId) {
        if (user.id === city.user_id) {
            usersWithCities[i] = {
                id: user.id,
                name: user.name,
                age: user.age,
                status: user.status,
                address: {
                    user_id: city.user_id,
                    country: city.country,
                    city: city.city,
                },
            };
            i++;
        }
    }
}

console.log(usersWithCities);

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
let numberArr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 43, 23, 5436, 343, 2334, 7765, 4432,
];

for (let i = 0; i < numberArr.length; i++) {
    numberArr[i] % 2 === 0 ? console.log(numberArr[i]) : '';
}

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

let copyNumberArr = [];

for (let i = 0; i < numberArr.length; i++) {
    copyNumberArr[i] = numberArr[i];
}
console.log(copyNumberArr);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

let wordArr = ['a', 'b', 'c'];
let text = '';
for (let i = 0; i < wordArr.length; i++) {
    text += wordArr[i];
}
console.log(text);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

let index = 0;
let newText = '';
while (index < wordArr.length) {
    newText += wordArr[index];
    index++;
}
console.log(newText);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
let newText2 = '';
for (const i of wordArr) {
    newText2 += i;
}
console.log(newText2);