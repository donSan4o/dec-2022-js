// ADDITIONAL TASKS

// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

let arr = [1, 2, 3, 4, 5, 'one', 'two', 'three', 'four', 'five', 12, 34, 'qwerty', true, false];
console.log(arr);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let newArr = [];
newArr[0] = 1;
newArr[1] = 2;
newArr[2] = true;
newArr[3] = 'js';
newArr[4] = false;
console.log(newArr);

// - є масив [2,17,13,6,22,31,45,66,100,-18]

let loopArr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// 1. перебрати його циклом while

let index = 0;
while (index < loopArr.length) {
    loopArr[index] += 1;
    index++;
}
console.log(loopArr);

// 2. перебрати його циклом for

for (let i = 0; i < loopArr.length; i++) {
    loopArr[i] -= 1;
}
console.log(loopArr);

// 3. перебрати циклом while та вивести числа тільки з непарним індексом

let newIndex = 0;
let oddWhileArr = 'odd numbers for "while" array is: ';
while (newIndex < loopArr.length) {
    if (loopArr[newIndex] % 2 == 1) {
        oddWhileArr += loopArr[newIndex] + ' ';
    }
    newIndex++;
}
document.write(`<div>${oddWhileArr}</div>`);

// 4. перебрати циклом for та вивести числа тільки з непарним індексом

let oddForArray = 'odd numbers for "for" array is: ';
for (let i = 0; i < loopArr.length; i++) {
    if (loopArr[i] % 2 == 1) {
        oddForArray += loopArr[i] + ' ';
    }
}
document.write(`<div>${oddForArray}</div>`);

// 5. перебрати циклом while та вивести  числа тільки парні значення

let newEvenIndex = 0;
let evenWhileArr = 'even numbers for "while" array is: ';
while (newEvenIndex < loopArr.length) {
    if (loopArr[newEvenIndex] % 2 == 0) {
        evenWhileArr += loopArr[newEvenIndex] + ' ';
    }
    newEvenIndex++;
}
document.write(`<div>${evenWhileArr}</div>`);

// 6. перебрати циклом for та вивести  числа тільки парні  значення

let evenForArray = 'even numbers for "for" array is: ';
for (let i = 0; i < loopArr.length; i++) {
    if (loopArr[i] % 2 == 0) {
        evenForArray += loopArr[i] + ' ';
    }
}
document.write(`<div>${evenForArray}</div>`);

// 7. замінити кожне число кратне 3 на слово "okten"

let newOktenArr = [];
for (let i = 0; i < loopArr.length; i++) {
    newOktenArr[i] = loopArr[i];
    if (newOktenArr[i] % 3 === 0) {
        newOktenArr[i] = 'okten';
    }
}
document.write(`<div>${newOktenArr}</div>`);

// 8. вивести масив в зворотньому порядку.

let reverseArr = [];
for (let i = 0; i < loopArr.length; i++) {
    reverseArr[i] = loopArr[loopArr.length - i - 1];
}
document.write(`<div>${reverseArr}</div>`);

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

// 1. перебрати його циклом while

let indexReverse = 0;
let reverseWhileArr = [];
while (indexReverse < loopArr.length) {
    reverseWhileArr[indexReverse] = loopArr[loopArr.length - indexReverse - 1];
    reverseWhileArr[indexReverse] += 1;
    indexReverse++;
}
document.write(`<div>${reverseWhileArr}</div>`);

// 2. перебрати його циклом for

let reverseForArray = [];
for (let i = 0; i < loopArr.length; i++) {
    reverseForArray[i] = loopArr[loopArr.length - i - 1];
    reverseForArray[i] -= 1;
}
document.write(`<div>${reverseForArray}</div>`);

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом

let newIndexReverse = 0;
let newReverseWhileArr = [];
let oddWhileArrReverse ='odd numbers for "while" reverse array is: ';
while (newIndexReverse < loopArr.length) {
    newReverseWhileArr[newIndexReverse] = loopArr[loopArr.length - newIndexReverse - 1];
    if (newReverseWhileArr[newIndexReverse] % 2 == 1) {
        oddWhileArrReverse += newReverseWhileArr[newIndexReverse] + ' ';
    }
    newIndexReverse++;
}
document.write(`<div>${oddWhileArrReverse}</div>`);

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

let oddForArrayReverse = 'odd numbers for "for" reverse array is: ';
let reverseForArr = [];
for (let i = 0; i < loopArr.length; i++) {
    reverseForArr[i] = loopArr[loopArr.length - i - 1];
    if (reverseForArr[i] % 2 == 1) {
        oddForArrayReverse += reverseForArr[i] + ' ';
    }
}
document.write(`<div>${oddForArrayReverse}</div>`);

// 5. перебрати циклом while та вивести числа тільки парні значення

let newEvenIndexReverse = 0;
let reverseWhileArrEven = [];
let evenWhileArrReverse = 'even numbers for "while" reverse array is: ';
while (newEvenIndexReverse < loopArr.length) {
    reverseWhileArrEven[newEvenIndexReverse] = loopArr[loopArr.length - newEvenIndexReverse - 1];
    if (reverseWhileArrEven[newEvenIndexReverse] % 2 == 0) {
        evenWhileArrReverse += reverseWhileArrEven[newEvenIndexReverse] + ' ';
    }
    newEvenIndexReverse++;
}
document.write(`<div>${evenWhileArrReverse}</div>`);

// 6. перебрати циклом for та вивести числа тільки парні значення

let evenForArrayReverse = 'even numbers for "for" reverse array is: ';
let newEvenForArrayReverse = [];
for (let i = 0; i < loopArr.length; i++) {
    newEvenForArrayReverse[i] = loopArr[loopArr.length - i - 1];
    if (newEvenForArrayReverse[i] % 2 == 0) {
        evenForArrayReverse += newEvenForArrayReverse[i] + ' ';
    }
}
document.write(`<div>${evenForArrayReverse}</div>`);

// 7. замінити кожне число кратне 3 на слово "okten"

let newOktenArrReverse = [];
for (let i = 0; i < loopArr.length; i++) {
    newOktenArrReverse[i] = loopArr[loopArr.length - i - 1];
    if (newOktenArrReverse[i] % 3 === 0) {
        newOktenArrReverse[i] = 'okten';
    }
}
document.write(`<div>${newOktenArrReverse}</div>`);

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < numArr.length; i++) {
    console.log(numArr[i]);
}

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let strArr = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
];
for (let i = 0; i < strArr.length; i++) {
    console.log(strArr[i]);
}

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

let mixArr = [1, 2, 'three', 'four', true, false, 'maybe', 8, 9, 'ten'];
for (let i = 0; i < mixArr.length; i++) {
    console.log(mixArr[i]);
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

for (let i = 0; i < mixArr.length; i++) {
    if (typeof mixArr[i] === 'boolean') {
        console.log(mixArr[i]);
    }
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

for (let i = 0; i < mixArr.length; i++) {
    if (typeof mixArr[i] === 'number') {
        console.log(mixArr[i]);
    }
}

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

for (let i = 0; i < mixArr.length; i++) {
    if (typeof mixArr[i] === 'string') {
        console.log(mixArr[i]);
    }
}

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

let anotherNewArr = [];

anotherNewArr[0] = 1;
anotherNewArr[1] = 2;
anotherNewArr[2] = true;
anotherNewArr[3] = 'js';
anotherNewArr[4] = false;
anotherNewArr[5] = true;
anotherNewArr[6] = 'html';
anotherNewArr[7] = 25;
anotherNewArr[8] = 37;
anotherNewArr[9] = 'react';

for (let i = 0; i < anotherNewArr.length; i++) {
    console.log(anotherNewArr[i]);
}

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 10; i++) {
    console.log(i);
    document.write(`<div>${i}</div>`)
}

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 100; i++) {
    console.log(i);
    document.write(`<div>${i}</div>`)
}

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 100; i += 2) {
    console.log(i);
    document.write(`<div>${i}</div>`)
}

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

for (let i = 0; i < 100; i++) {
    if (i % 2 == 0) {
        console.log(i);
        document.write(`<div>${i}</div>`)
    }
}

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

for (let i = 0; i < 100; i++) {
    if (i % 2 == 1) {
        console.log(i);
        document.write(`<div>${i}</div>`)
    }
}